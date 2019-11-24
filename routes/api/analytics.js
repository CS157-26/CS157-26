const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");
const moment = require("momentjs");
// number of open tickets by team

function openTicketTeam() {
    return new Promise((res, rej)=> {
        db.query(
        `SELECT COUNT(*), teams.* FROM tickets
        JOIN items USING (item_id)
        JOIN types USING (type_id)
        JOIN teams USING (team_id)
        WHERE current_status <> 'CLOSED'
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


async function ticketsOverTime(team_id, min, max, step) {
}

// @route   GET api/analytics
// @desc    
// @access  Private
router.get("/",
    [],
    (req, res) => {
    var validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request:"});
    }
});
