const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");

// number of open tickets by team
`SELECT COUNT(tickets.*), teams.* FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
GROUP BY team_id
WHERE tickets.status <> 'CLOSED'`

// average completion time of tickets by team
`SELECT AVG(DATEDIFF(day, tickets.modification_date, tickets.creation_date)), teams.* FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
GROUP BY team_id
WHERE tickets.status = 'CLOSED'`

// number of tickets given to a team over time, broken out by week.
// the number of tickets is the number of open tickets at that point in time

`SELECT COUNT(*) FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
GROUP BY DATEPART('wk', tickets.creation_date) HAVING
`

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
