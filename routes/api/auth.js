const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const SECRET_KEY = '321cba'

const db = require("../../config/db");

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    db.query('SELECT * FROM users WHERE email = ?', email, (err, rows) => {
        if (err) {
           return done(err)
        } else {
            const userAccount = rows[0];
            const passwordMatch  = bcrypt.compare(password, userAccount.password);

            if (passwordMatch) {
                return done(null, userAccount);
            } else {
                return done(null, false, 'Incorrect Username / Password');
            }
        }
    });
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
    secretOrKey: SECRET_KEY
}, async (token, done) => {
    try {
        return done(null, token.user)
    } catch (error) {
        done(error);
    }
}
));

