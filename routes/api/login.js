const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = '321cba'

const db = require("../../config/db");



router.post('login', async (req, res) => {
    db.query('SELECT * FROM users WHERE email = ?', [res.body.email], (err, rows) => {
        if (err) {
            res.status(500).json({msg: "Error: Could not verify account information."})
        } else {
            let user = rows[0];

            if (!user) {
                return res.send({ErrorMessage: "email is not registered"});
            }

            let isMatch = await bcrypt.compare(req.body.password, user.password);
            
            if (!isMatch) {
                return res.send({ErrorMessage: "Password is Incorrect"});
            }

        }
    });
});
    
