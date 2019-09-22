const express = require("express");
const router = express.Router();

const db = require("../../config/db");
db.connect();

// @route   GET api/demo
// @desc    Gets the list of all students from database "hw1" for the demo
// @access  Public
router.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM students";

    db.query(sqlQuery, (err, rows, fields) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(rows);
        }

        // db.end();
    });
});

module.exports = router;
