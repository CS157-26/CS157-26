const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
const db = require("../../config/db");



// @route   GET api/analytics
// @desc    
// @access  Private
router.get("/",
    [],
    (req, res) => {
    var validationErr = validationResult(req);
    //Validate whether the user entered necessary information
    if (!validationErr.isEmpty())
    {
        return res
            .status(400)
            .json({msg:"Bad Request:"});
    }
});
