const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = '321cba'

const db = require("../../config/db");



router.post('login', (req, res) => {
    // select from users table by email
    db.query('SELECT * FROM users WHERE email = ?', [res.body.email], (err, rows) => {
        if (err) {
            res.status(500).json({msg: "Server Error."})
        } else {
            const user = rows[0];

            // check to see if a matching instance is found
            if (!user) {
                return res.send({ErrorMessage: "Email is not registered"});
            }

            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            
            // verify the password matches what's on record
            if (!isMatch) {
                return res.send({ErrorMessage: "Password is incorrect"});
            }

            const token  = jwt.sign({
                _id: user.user_id,
                username: user.username
            }, SECRET_KEY);

            // pass token back to be saved
            res.status(200).send({token: token});
        }
    });
});
    
