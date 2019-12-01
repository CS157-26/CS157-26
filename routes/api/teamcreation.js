const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.get("/current", (req, res) => {
    const query = "SELECT types.type_id, types.name AS 'typename', categories.name AS 'catname' FROM types, categories WHERE categories.category_id = types.category_id AND types.team_id = 0"
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ msg: "Error: unable to retrieve existing types." });
        } else {
            const types = rows.map(function (row) {
                return { value: row.type_id, label: row.catname + " / " + row.typename }
            });
            const query2 = "SELECT name FROM teams";
            db.query(query2, (err, rows) => {
                if (err) {
                    res.status(500).json({ msg: "Error: unable to retrieve existing team names" });
                } else {
                    const teams = rows.map(row => row.name);
                    res.status(200).json({
                        teams: teams,
                        types: types
                    })
                }
            });
        }
    });
});

router.get("/members", (req, res) => {
    const query = "SELECT user_id AS id, username AS name FROM users JOIN teamMembers USING (user_id) JOIN types USING (team_id) JOIN items USING (type_id) WHERE item_id = " + req.query.itemid;
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ msg: err });
        } else {
            if (!rows) {
                res.status(500).json({ msg: "Error: no teams found associated with ticket" });
            } else {
                const results = JSON.parse(JSON.stringify(rows));
                res.status(200).json(results);
            }
        }
    });
})

router.get("/currentteams", (req, res) => {
    const query = "SELECT * FROM teams";
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ msg: "Error: unable to retrieve existing teams" });
        } else {
            if (!rows) {
                res.status(500).json({ msg: "Error: no teams found. Please contact administrator" });
            } else {
                const results = JSON.parse(JSON.stringify(rows));
                res.status(200).json(results);
            }
        }
    });
})

router.post("/create", (req, res) => {
    const query = "INSERT INTO teams VALUES (DEFAULT, '" + req.body.name + "' )";
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ msg: "Error: unable to create new team." });
        } else {
            const teamId = rows.insertId;
            const updatedTypes = req.body.types;
            const query2 = "UPDATE types SET team_id = " + teamId + " WHERE type_id IN (" + updatedTypes + ")";
            db.query(query2, (err) => {
                if (err) {
                    res.status(500).json({ msg: "Error: Unable to set the responsible team to the types." });
                } else {
                    res.status(200).json({ msg: "success" });
                }
            });
        }
    });
});

module.exports = router;