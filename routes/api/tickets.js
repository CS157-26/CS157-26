const express = require("express");
const router = express.Router();
const db = require("../../config/db");

const { check, checkSchema, validationResult, body } = require("express-validator");
const commentsValidator = require("../../validation/comments");

/*
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt");
passport.use(jwtStrategry);
*/

/**
 * Performs a query to determine whether a particular object exists
 * within a given table. The column to select must be specified.
 * 
 * This function is asynchrounus and returns a promise.
 * @param {string} table The table to be searched.
 * @param {string} col The name of the column/attribute constituting the entity id.
 * @param {string} id The entity id to be searched for.
 * 
 * @returns {Promise<boolean>} Promise which when resolved indicates whether any such entity was located.
 */
async function entityExists(table, col, id)
{
    var promise = new Promise((res)=>{
        db.query("SELECT * FROM "+table+" WHERE "+col+"=?",
        [id],
        (err, rows, fields)=>{
            if (err) {
                //rej("Query Failed")
                res(false);
            } else {
                if (rows.length >= 1)
                    res(true);
                else   
                    res(false);
            }
        })
    });
    return promise;
}

/**
 * Performs a database query to find all comments associated with a given ticket,
 * specified by a ticket id.
 * 
 * This function is asynchronus and returns a promise.
 * @param {string} ticket_id The id of the ticket associated with the comments.
 * @return {Promise} A promise which either contains row data retrieved, or an error.
 */
async function getTicketComments(ticket_id)
{
    return new Promise((res, rej) => {
        db.query("SELECT * FROM comments WHERE ticket_id=?",
        [ticket_id],
        (err, rows, fields)=>
        {
            if (err) {
                rej(err);
            } else {
                res(rows);
            }
        })
    });
}

/**
 * Retrieves a list of all users associated with a given ticket. Specifically,
 * it retrieves there username and user_id (user_id incase more information
 * is needed by the front end).
 * 
 * This function is asynchronus and returns a promise.
 * @param {string} ticket_id The id of the ticket associated with the assignees.
 * @return {Promise} A promise which contains either row data retrieved, or an error.
 */
async function getTicketAssignees(ticket_id)
{
    return new Promise((res, rej) => {
        db.query(
       `SELECT username, user_id FROM users
        JOIN userassignment USING (user_id)
        WHERE ticket_id=?`,
        [ticket_id],
        (err, rows, fields)=>
        {
            if (err) {
                rej(err);
            } else {
                res(rows);
            }
        })
    });
}

/**
 * Constructs an sql query which can be used to select a set of tickets
 * (specifically overview information on tickets, so no content_text)
 * for a given user or team. The parameters to this function can be null.
 * 
 * This function generates queries as follows:
 * 1. If neither user_id or team_id is specified, all tickets in the database
 *    will be returned.
 * 2. If user_id is specified, all tickets associated with a user will be returned.
 * 3. If team_id is specified, all tickets associated with a team will be returned.
 * 4. If both user_id and team_id are specified, all tickets associated with that
 *    user and team will be returned.
 * 
 * @param {string} user_id Id of the user associated with the tickets. 
 * @param {string} team_id Id of the team associated with the tickets.
 * @return {string} A string containing the query generated.
 */
function buildTicketFilter(user_id, team_id)
{
    var strA = [
        `SELECT DISTINCT ticket.ticket_id, ticket.item_id, ticket.author_id, ticket.title, ticket.current_status,
        ticket.priority, ticket.creation_date, ticket.modification_date, ticket.protected_status,
        item.name AS item_name, type.name AS type_name, category.name AS category_name
        FROM tickets ticket
        JOIN items item ON item.item_id = ticket.item_id
        JOIN types type ON type.type_id = item.type_id
        JOIN categories category ON category.category_id = type.category_id
        JOIN userassignment assignees ON assignees.ticket_id = ticket.ticket_id`
    ]
    if ((user_id && user_id != "") || (team_id && team_id != "")) {
        strA[1] = " WHERE";
        var i = 2;
        if (user_id && user_id != "") {
            strA[i] = " assignees.user_id = ";
            strA[i+1] = user_id;
            strA[i+2] = " OR ";
            strA[i+3] = " ticket.author_id = ";
            strA[i+4] = user_id;
            i = i + 5;
            if (team_id && team_id != "") {
                strA[i] = " AND";
                i = i + 1;
            }
        }
        if (team_id && team_id != "") {
            strA[i+2] = " type.team_id = ";
            strA[i+1] = team_id;
        }
    }
    return strA.join("");
}

/**
 * Generates a json document which contains a detailed description of a ticket
 * including it's content_text, sorting information, assignees, and comments.
 * 
 * The caller must first retrieve base ticket information (everything in the tickets
 * table plus sorting information), this function then composes ticket info from other
 * fields into said json doc, and returns nothing, as the third paramater (res) is the
 * result of a request.
 * 
 * @param {JSON} ticketDetails Contains base information about a ticket (retrieved by the caller).
 * @param {string} ticket_id Id of the ticket to retrieve data for.
 * @param {*} res The result of the calling request handler.
 */
async function buildDetailsDoc(ticketDetails, ticket_id, res)
{
    try {
        const comments = await getTicketComments(ticket_id);
        ticketDetails.comments = comments;
    }
    catch (rejection) {
        ticketDetails.comments = [];
        console.log(rejection);
    }
    try {
        const users = await getTicketAssignees(ticket_id);
        ticketDetails.assignees = users;
    }
    catch (rejection) {
        ticketDetails.assignees = [];
        console.log(rejection);
    }
    res
    .status(200)
    .json(ticketDetails);
}

// @route   GET api/tickets/details
// @desc    Returns a ticket
// @param ticket_id - the id of the ticket with the details
// @access  Private
router.get("/details",
    //passport.authenticate('jwt', {session: false}),
    [
        check('ticket_id').exists()
    ],
    (req, res) => {
        var validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res
            .status(400)
            .json({msg:"Bad Request: A ticket_id must be provided."});
        }

        const {ticket_id} = req.body;

        db.query(
       `SELECT ticket.*, item.name AS "item_name", type.name AS "type_name",
        category.name AS "category_name"
        FROM tickets ticket
        JOIN items item ON item.item_id = ticket.item_id
        JOIN types type ON type.type_id = item.type_id
        JOIN categories category ON category.category_id = type.category_id
        WHERE ticket.ticket_id = ?`, [ticket_id],
        (err, rows, fields) => {
            if (err) {
                res.status(500).json({msg:"Error: There was an issue retreiving the ticket."});
            } else {
                if (!rows || !rows.length)
                {
                    res.status(404).json({msg:"Bad Request: The desired ticket could not be found."});
                } else {
                    buildDetailsDoc(rows[0], ticket_id, res);
                }
            }
        });
});

// @route   GET api/tickets/overview
// @desc    Returns a list of ticket overview info
// @param user_id - Specifies the user we want to retrieve tickets for
// @param team_id - Specifies the team we want to retrieve tickets for
// @access  Private
router.get("/overview",
    //passport.authenticate('jwt', {session: false}),
    [
    ],
    async (req, res) =>{
        var validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res
            .status(400)
            .json({msg:"Bad Request: "});
        }
        const {user_id, team_id} = req.body;

        db.query(
            buildTicketFilter(user_id, team_id),
            (err, rows, fields) => {
                if (err) {
                    res
                    .status(500)
                    .json({msg:"Error: There was an issue retreving the requested tickets", error:err});
                } else {
                    res
                    .status(200)
                    .json(rows);
                }
        });
});

// @route   POST api/tickets
// @desc    Returns a ticket
// @access  Private
router.post("/",
    //passport.authenticate('jwt', {session: false}),
    [
        check('item_id').exists(),
        check('author_id').exists(),
        check('title').exists(),
        check('content_text').exists(),
        check('current_status').exists(),
        check('priority').exists(),
        check('protected_status').exists()
    ],
    async (req, res) => {
        var validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res
            .status(400)
            .json({msg:"Bad Request: Fields were missing from the ticket creation request."});
        }

        const {item_id, author_id, title, content_text, current_status, priority, protected_status} = req.body;
        /*TODO: add extra validation for:
        author_id : make sure this matches the token provided for the request (the person making the request is the author)
        */
       const validUser = await entityExists("users", "user_id", author_id);
       const validItem = await entityExists("items", "item_id", item_id);
        if (!validUser || !validItem) {
            return res
            .status(400)
            .json({msg:"Bad Request: The item or author provided is invalid."});
        }

        db.query(
       `INSERT INTO tickets (item_id, author_id, title, content_text, current_status, priority, creation_date, modification_date, protected_status)
        VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIME, CURRENT_TIME, ?)`,
        [item_id, author_id, title, content_text, current_status, priority, protected_status],
        (err, rows, fields) => {
            if (err) {
                res
                .status(500)
                .json({msg:"Error: There was an issue creating the ticket.", error:err});
            } else {
                res
                .status(200)
                .send("success");
            }
        });
});

// @route   POST api/tickets/comments
// @desc    Returns comments made by a user or comments to a specific ticket or comments made by a user for a specific ticket
// @req     author_id: The user id of the user whose comments history is to be queried
// @req     ticket_id: The ticket id of the ticket that contains the comments to be queried
// @req     limit: Optional number of comments to be queried
// @access  Private
router.post("/comments", checkSchema(commentsValidator.fetchCommentsValidation),(req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
        return res.status(400).send({ error_msg: "Bad request: Invalid request", ...errors });
    }

    const {author_id, ticket_id, limit} = req.body;

    let filter = "";

    if (author_id) {
        filter = ` WHERE users.user_id=${author_id}`;
    }
    if (ticket_id) {
        if (filter.length > 0) {
            filter += ` AND comments.author_id=${ticket_id}`;
        } else {
            filter = ` WHERE comments.author_id=${ticket_id}`;
        }
    }

    if (filter.length === 0) {
        return res.status(400).send({ error_msg: "Bad request: author_id and/or ticket_id required" });
    }

    let query = "SELECT comments.*, users.username FROM comments JOIN users ON(comments.author_id=users.user_id)";
    query += filter;

    if (limit) {
        query += ` LIMIT ${limit}`;
    }

    db.query(query, (err, rows, field) => {
        if (err) {
            res.status(500).send({ error_msg: `Server error: Database error encountered: ${err}`});
        } else if (rows.length > 0) {
            res.status(200).send(rows);
        } else {
            res.status(404).send({ msg: "Comments not found"});
        }
    });
});

module.exports = router;
