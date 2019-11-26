const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../../config/db");
//db.connect();

function verifyPassword(password) {
    /*
     * IMPORTANT NOTE:
     * The regular expression shown below was developed using techniques described in the
     * article "Use RegEx to Test Password Strength" written by Nic Raboy.
     * URL: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
     */

    /*
     * Paswords must have:
     * At least 5 lowercase letters (?=(?:.*[a-z]){5,})
     * At least 1 uppercase letter (?=.*[A-Z])
     * At least 1 special character (?=.*[!@#$%^&*])
     * At least 1 number (?=.*[0-9])
     */
    var ruleTest = new RegExp("^(?=(?:.*[a-z]){5,})(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])");
    return ruleTest.test(password);
}

/**
 * Attempts to creaate a user account given a password, username and email.
 * Plain text passwords are not stored in the database, and as such are hashed
 * within this function.
 * 
 * @param {string} username User account name
 * @param {string} email User account email
 * @param {string} password User account password before hashed
 * @param {Response} res Response for user creation.
 */
function addUserAccount(username, email, password, teams, res) {
    /*
     * If this has been called, we assume that the email address does not already
     * exist in our users table, and this will indeed be a unique account.
     */
    if (!verifyPassword(password)) {
        return res.status(400).json({ msg: "Bad Request: The provided password does not meet the requirements specified." });
    }

    var pwHash = bcrypt.hashSync(password, 10); //if set the number of rounds to 10 for now

    var insertCmd = "INSERT INTO users (username, password, email, creation_date) VALUES ('" + username + "', '" + pwHash + "', '" + email + "', CURRENT_TIMESTAMP);"
    db.query(insertCmd, (err, result) => {
        if (err) {
            res.status(500).json({ msg: "Error: There was an issue registering your account" });
        } else {
            const newID = result.insertId;
            teams.map(team => {
                const teamQuery = "INSERT INTO teamMembers VALUES (" + newID + ", " + team + ")";
                console.log(teamQuery);
                db.query(teamQuery, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })

            })
            res.status(200).send("success");
        }
    })
}

// @route   POST api/users
// @desc    Register a new user
// @access  Public
router.post("/",
    [
        check('email').isEmail(),
        check('password').exists(),
        check('username').exists(),
        check('teams').exists(),
    ],
    (req, res) => {
        var validationErr = validationResult(req);


        //Validate whether the user entered necessary information
        if (!validationErr.isEmpty()) {
            return res
                .status(400)
                .json({ msg: "Bad Request: A valid username, email, password, and team(s) must be provided for registration." });
        }
        /*
         * We assume the body of the request is a json
         * document
         */
        const { username, email, password } = req.body;
        //Next, check to ensure a user with the same email doesn't already exist
        db.query(
            "SELECT * FROM users WHERE lower(users.email) = lower('" + email + "') LIMIT 1;",
            (err, rows) => {
                if (err) {
                    res.status(500).json({ msg: "Error: Could not verify account information." })
                } else {
                    if (rows && rows.length) {
                        res.status(400).json({ msg: "Bad Request: A User account with this email already exists." });
                    } else {
                        const teams = req.body.teams.split(",");
                        addUserAccount(username, email, password, teams, res);
                    }
                }
            })
    });

module.exports = router;
