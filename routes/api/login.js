const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = '321cba';
const db = require("../../config/db");

const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE email = ?', username, (err, rows) => {
        if (err) {
            return res.status(400).json({ error: "server error"})
        }

        const userAccount = rows[0];

        if (userAccount) {
            const passwordMatch = bcrypt.compare(password, userAccount.password);

            if (passwordMatch) {
                const payload = {
                    id: userAccount.user_id,
                    username: userAccount.username
                };

                req.login(payload, { session: false }, (error) => {
                    if (error) {
                        res.status(400).send({ error });
                    }

                    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2 days'});
                    return res.json({ success: true, token: "bearer " + token });
                })
            }
            return res.status(400).json({ error: "server error"});
        }
        else {
            return res.status(400).json({ error: "server error"});
        }
    });
});

module.exports = router;
