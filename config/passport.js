const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const SECRET_KEY = '321cba';

const db = require("./db");

passport.use(new LocalStrategy(
    (username, password, done) => {
        db.query('SELECT * FROM users WHERE email = ?', username, (err, rows) => {
            if (err) {
                return done(err)
            }
            const userAccount = rows[0];
            console.log(userAccount);
            if (userAccount) {
                const passwordMatch = bcrypt.compare(password, userAccount.password);

                if (passwordMatch) {
                    return done(null, userAccount);
                }
            }
            else {
                return done(null, false, 'Incorrect Username / Password');
            }
        });
    }));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}, (payload, done) => {
    db.query('SELECT * FROM users WHERE user_id = ?', payload.id, (err, rows) => {
        if (err) {
            return done(err, false);
        }
        const userAccount = rows[0];
        if (userAccount) {
            return done(null, userAccount);
        }
        else {
            return done(null, false);
        }
    });
}
));

