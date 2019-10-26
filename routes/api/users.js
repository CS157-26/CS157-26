const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const db = require("../../config/db");
//db.connect();

function verifyPassword()
{
    return true; //TODO: implement me
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
function addUserAccount(username, email, password, res)
{
    /*
     * If this has been called, we assume that the email address does not already
     * exist in our users table, and this will indeed be a unique account.
     */ 
    if (!verifyPassword(password))
    {
        return res.status(400).json({msg:"Bad Request: The provided password does not meet the requirements specified."});
    }

    var pwHash = bcrypt.hashSync(password, 10); //if set the number of rounds to 10 for now
    
    var insertCmd = "INSERT INTO users (username, password, email, creation_date) VALUES ('"+username+"', '"+pwHash+"', '"+email+"', CURRENT_TIMESTAMP);"
    db.query(insertCmd, (err, rows, fields)=>{
        if (err) {
            res.status(500).json({msg:"Error: There was an issue registering your account"});
        } else {
            res.status(200).send("success");
        }
    })
}

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
        "SELECT * FROM users WHERE lower(users.email) = lower('"+email+"') LIMIT 1;",
        (err, rows, fields) => {
            if (err) {
                res.status(500).json({msg:"Error: Could not verify account information."})
            } else {
                if (rows && rows.length)
                {
                    res.status(400).json({msg:"Bad Request: A User account with this email already exists."});
                } else {
                    addUserAccount(username, email, password, res);
                }
            }
    })
});

module.exports = router;
