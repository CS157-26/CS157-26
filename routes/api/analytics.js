const express = require("express");
const router = express.Router();
const { check , validationResult, query } = require("express-validator");
const db = require("../../config/db");
const moment = require("moment");

/**
 * This function retrieves the number of open tickets broken out by team at this moment in time.
 * 
 * This function is asynchronise and returns a promise.
 * 
 * @return {Promise<any>} A promise which resolves to the returned list of open tickets by team.
 */
function openTicketTeam() {
    return new Promise((res, rej)=> {
        db.query(
        `SELECT teams.*, COUNT(*) AS 'open_tickets' FROM tickets
        JOIN items USING (item_id)
        JOIN types USING (type_id)
        JOIN teams USING (team_id)
        WHERE current_status <> 'CLOSED'
        GROUP BY team_id
        ORDER BY team_id`, 
        (err, rows, fields)=>{
            if (err) {
                rej(err);
            } else {
                res(rows);
            }
        });
    });
}

/**
 * This function retrieves the average resolution time for each team of tickets. That is, the
 * average time it takes for a given team to mark a ticket as closed (resolving the issue). The
 * values returned are in days.
 * 
 * This is an asynchronus function which returns a promise.
 * 
 * @return {Promise<any>} A promise which resolves to the returned list of averages by team.
 */
function avgCompletionTime() {
    return new Promise((res, rej)=>{
        db.query(
        `SELECT AVG(DATEDIFF(tickets.modification_date, tickets.creation_date)) AS 'avg_days', teams.*
        FROM tickets
        JOIN items USING (item_id)
        JOIN types USING (type_id)
        JOIN teams USING (team_id)
        WHERE tickets.current_status = 'CLOSED'
        GROUP BY team_id`,
        (err, rows, fields)=>{
            if (err) {
                rej(err);
            } else {
                res(rows);
            }
        });
    });
}

/**
 * Retrieves the number of open tickets at a given point of team for a specific team. This is used
 * by the ticketsOverTime function to sample an interval of time.
 * 
 * This function is asynchronus and returns a promise.
 * 
 * @param {string} team_id The team id to retrieve open tickets for.
 * @param {string} date The point in time at which to measure open tickets.
 * @return {Promise<any>} A promise which resolves to a single value query result of the count of open tickets.
 */
function ticketsAtTime(team_id, date)
{
    return new Promise((res, rej)=>{
        db.query(
        `SELECT COUNT(*) AS open_count
        FROM tickets
        JOIN items USING (item_id)
        JOIN types USING (type_id)
        JOIN teams USING (team_id)
        WHERE team_id = ? AND (tickets.current_status <> 'CLOSED' OR (tickets.modification_date > ?))
        `,
        [team_id, date], 
        (err, rows, fields)=>{
            if (err) {
                rej(err);
            } else {
                res(rows); // this will be a single value representing the number of open tickets at this point in time.
            }
        });
    });
}

/**
 * Generates a json document containing a list of open tickets for a given team over a specified
 * time interval. This interval is specified using a start and end date. There are multiple formats
 * accepted (as the input string is parsed using the Moment library).
 * 
 * Step's are used to indicate the number of values that will be taken from the inverval. That is,
 * if there are 3 steps, over a 24 hr period, then the function will return a 3 element array
 * with the number of tickets every 8 hours on that day.
 * 
 * This is an asynchronus function.
 * 
 * @param {string} _team_id The team id to retrieve ticket history information on.
 * @param {string} _min The starting date for the history interval (multiple formats accepted).
 * @param {string} _max The end date for the history interval (multiple formats accepted).
 * @param {number} _step The number of samples that will be taken from the interval.
 * @return {JSON} A Json document containing the retrieved information.
 */
async function ticketsOverTime(_team_id, _min, _max, _step) {
    let start = moment(_min);
    const end  = moment(_max);
    const duration =  moment.duration(end.diff(start));
    const delta_millis = duration.asMilliseconds() / _step;
    let count_list = [];
    for (let i = 0; i < _step; i++) {
        try {
            let result = await ticketsAtTime(_team_id, start.format("YYYY-MM-DD hh:mm:ss"));
            count_list.push({index : i, val : result, date : start.toISOString()});
        }
        catch (rejection) {
            // do something
            count_list.push({index : i, val : rejection, date : start.toISOString()});
        }
        start = start.add(delta_millis, "milliseconds");
    }
    return {team_id: _team_id, start: _min, end: _max, step: _step, values: count_list};
}

// @route   GET api/analytics/openTicketsByTeam
// @desc    Retrieves a list of the number of open tickets broken out by team.
// @access  Private
router.get("/openTicketsByTeam",
    //passport.authenticate('jwt', {session: false}),
    [],
    async (req, res) => {
    let validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request:"});
    }

    try {
        const result = await openTicketTeam();
        return res
            .status(200)
            .json(result);
    }
    catch (rejection) {
        return res
            .status(500)
            .json({msg:"Error: An issue occured while processing your request.", error:rejection});
    }
});

// @route   GET api/analytics/avgCloseTime
// @desc    Retrieves a list of the average close time (how long it takes for ticket to be closed in days) of tickets broken out by team.
// @access  Private
router.get("/avgCloseTime",
    //passport.authenticate('jwt', {session: false}),
    [],
    async (req, res) => {
    let validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request:"});
    }

    try {
        const result = await avgCompletionTime();
        return res
            .status(200)
            .json(result);
    }
    catch (rejection) {
        return res
            .status(500)
            .json({msg:"Error: An issue occured while processing your request.", error:rejection});
    }
});

// @route   GET api/analytics/avgCloseTime
// @desc    Retrieves a history of open tickets for a given team.
// @param   team_id - Specifies the team to retrieve the history of.
// @param   start - Specifies the starting date for the history interval.
// @param   end - Specifies the end date for the history invertval.
// @param   step - Specifies the number of samples to take from the history interval.
// @access  Private
router.get("/ticketsOverTime",
    //passport.authenticate('jwt', {session: false}),
    [
        query('team_id').exists(),
        query('start').exists(),
        query('end').exists(),
        query('step').isNumeric()
    ],
    async (req, res) => {
    let validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request: please specify a valid team_id, start date, end date, and step."});
    }
    var {team_id, start, end, step} = req.query;
    try {
        const result = await ticketsOverTime(team_id, start, end, step);
        return res
            .status(200)
            .json(result);
    }
    catch (rejection) {
        return res
            .status(500)
            .json({msg:"Error: An issue occured while processing your request.", error:rejection});
    }
});

module.exports = router;