const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const SECRET_KEY = '321cba';

const router = express.Router;

router.post('/login', (req, res) => {
    passport.authenticate(
        'local',
        {session: false},
        (error, user) => {

            if (error || !user) {
                res.status(400).json({error});
            }

            const payload = {
                username: user.username,
                id: user.id,
                expires: Date.now() + (24 * 60 * 60 * 1000)
            };

            req.login(payload, {session: false}, (error) => {
                if (error) {
                    res.status(400).send({ error });
                }

                const token = jwt.sign(JSON.stringify(payload), SECRET_KEY);

                res.cookie('jwt', token, { httpOnly: false, secure: false });
            });
        },
    )(req, res);
});

module.exports = router;