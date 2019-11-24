const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");
const moment = require("momentjs");
// number of open tickets by team

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

// average completion time of tickets by team

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

// number of tickets given to a team over time, broken out by week.
// the number of tickets is the number of open tickets at that point in time

// we need a query, that returns the number of open tickets on a team, in a given week.

function ticketsAtTime(team_id, date)
{
    return new Promise((res, rej)=>{
        db.query(
        `SELECT COUNT(*)
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


async function ticketsOverTime(_team_id, _min, _max, _step) {
    let start = moment(_min);
    const end  = moment(_max);
    const duration =  moment.duration(end.diff(start));
    const delta_millis = duration.asMilliseconds() / _step;
    let count_list = [];
    for (let i = 0; i < _step; i++) {
        try {
            let result = await ticketsAtTime(_team_id, start);
            count_list.push({index : i, val : result, date : start});
        }
        catch (rejection) {
            // do something
            count_list.push({index : i, val : [], date : start});
        }
        start = start.add(delta_millis, "milliseconds");
    }
    return {_team_id, start: _min, end: _max, step: _step, values: count_list};
}

// @route   GET api/analytics/openTicketsByTeam
// @desc    Retrieves a list of the number of open tickets broken out by team
// @access  Private
router.get("/openTicketsByTeam",
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
    [
        check('team_id').exists(),
        check('start').exists(),
        check('end').exists(),
        check('step').isNumeric()
    ],
    async (req, res) => {
    let validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request:"});
    }
    let {team_id, start, end, step} = req.body;
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