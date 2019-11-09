const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");

/*
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt");
passport.use(jwtStrategry);
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



// @route   GET api/tickets
// @desc    Returns a ticket
// @access  Private
router.get("/",
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
       `SELECT ticket.ticket_id, ticket.author_id, ticket.title,
        ticket.current_status, ticket.priority, ticket.creation_date, ticket.modification_date,
        ticket.protected_status, item.name AS "item_name", type.name AS "type_name",
        category.name AS "category_name"
        FROM tickets ticket
        RIGHT JOIN items item ON item.item_id = ticket.item_id
        RIGHT JOIN types type ON type.type_id = item.type_id
        RIGHT JOIN categories category ON category.category_id = type.category_id
        WHERE ticket.ticket_id = ?`, [ticket_id],
        (err, rows, fields) => {
            if (err) {
                res.status(500).json({msg:"Error: There was an issue retreiving the ticket."});
            } else {
                if (!rows || !rows.length)
                {
                    res.status(404).json({msg:"Bad Request: The desired ticket could not be found."});
                } else {
                    res.status(200).json(rows[0]); // we send the only entry we recieved
                }
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
        check('context_text').exists(),
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

        const {item_id, author_id, title, context_text, current_status, priority, protected_status} = req.body;
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
        [item_id, author_id, title, context_text, current_status, priority, protected_status],
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

module.exports = router;
