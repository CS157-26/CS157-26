const express = require("express");
const router = express.Router();

const db = require("../../config/db");
db.connect();

// @route   POST api/users
// @desc    Register a new user
// @access  Public
router.post("/", (req, res) => {

    /*We assume the body of the request is a json
     *document*/
    const { username, email, password } = req.body;
    //Validate whether the user entered necessary information
    if (!username || !email || !password)
    {
        return res
            .status(400)
            .json({msg:"Bad Request: A username, email, and password must be provided for registration."});
    }

    //Next, check to ensure a user with the same email doesn't already exist
    db.query(
        "SELECT COUNT(1) FROM users WHERE lower(users.email) = lower('"+email+"');",
        (err, rows, fields) => {
            if (err) {
                return res.status(404).json({msg:"Error: Could not verify account information."})
            } else {
                
            }
        }
        )


    /*const sqlQuery = "SELECT * FROM students";

    db.query(sqlQuery, (err, rows, fields) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(rows);
        }

        // db.end();
    });*/
    res.send('register');
});

module.exports = router;
