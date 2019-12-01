const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = '321cba';
const db = require("../../config/db");

const router = express.Router();

function recordLogin(userID, isSuccess, ip) {
    const insertCmd = "INSERT INTO login_attempts (user_id, ip, is_successful, time_stamp) VALUES ('" + userID + "', '" + ip + "', " + isSuccess + ", CURRENT_TIMESTAMP);"
    db.query(insertCmd, (err, rows, fields) => {
        return err;
    })
}

router.post('/', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE email = ?', username, (err, rows) => {
        if (err) {
            return res.status(400).json({ error: "server error" })
        }

        const userAccount = rows[0];

        if (userAccount) {
            const passwordMatch = bcrypt.compareSync(password, userAccount.password);

            const ip = req.connection.remoteAddress;
            err = recordLogin(userAccount.user_id, passwordMatch, ip);
            if (err) {
                return res.status(400).json({ error: "server error" })
            }

            if (passwordMatch) {
                const teamQuery = `SELECT teams.* FROM users JOIN teammembers USING(user_id) JOIN teams USING(team_id) WHERE users.user_id=${userAccount.user_id}`;
                db.query(teamQuery, (err, rows, fields) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    let parsedRowData = [];
                    if (rows.length > 0) {
                        for (let i = 0; i < rows.length; i++) {
                            parsedRowData[i] = {
                                team_id: rows[i].team_id,
                                name: rows[i].name
                            };
                        }
                    }

                    const payload = {
                        id: userAccount.user_id,
                        username: userAccount.username,
                        teams: parsedRowData
                    };
    
                    req.login(payload, { session: false }, (error) => {
                        if (error) {
                            return res.status(400).send({ error });
                        }
    
                        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2 days' });
                        return res.json({ success: true, token: "bearer " + token });
                    })
                });
            }
        } else {
            return res.status(400).json({ error: "invalid username / password" });
        }
    });
});

module.exports = router;
