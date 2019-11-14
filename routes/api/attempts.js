const express = require('express');
const db = require("../../config/db");

const router = express.Router();

router.get("/", (req, res) => {
    const user_id = req.body.user;
    console.log(user_id);
    const query = "SELECT * FROM login_attempts WHERE user_id = " + user_id;
    db.query(query, (err, rows) => {
        if(err) {
            res.status(500).json({msg: "Error: unable to retreive login attempts"});
        } else {
            if (!rows){
                res.status(500).json({msg: "Error: no login attempts found. Please contact administrator"});
            } else {
                res.status(200).json(rows);
            }
        }
    });
});

module.exports = router;