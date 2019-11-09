const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");

/*
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt");
passport.use(jwtStrategry);
*/




// @route   GET api/ticket-filters
// @desc    Returns a list of all tickets given a specific filter criteria
// @access  Private
router.get("/",
    //passport.authenticate('jwt', {session: false}),
    [],
    (req, res) => {
        var validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res
            .status(400)
            .json({msg:"Bad Request: --"});
        }
});


module.exports = router;
