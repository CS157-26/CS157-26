const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const SECRET_KEY = '321cba';

const router = express.Router();

router.post('/', (req, res) => {
    passport.authenticate(
        'local',
        {session: false},
        (error, user) => {
            if (error || !user) {
                return res.status(400).json({
                    message: 'something broke',
                    user : user
            });
            }

            console.log(user);
            const payload = {
                username: user.username,
                id: user.user_id
            };

            req.login(payload, {session: false}, (error) => {
                if (error) {
                    res.status(400).send({ error });
                }

                const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '2 days'});
                res.json({token: token});
            });
        })(req, res);
});

module.exports = router;