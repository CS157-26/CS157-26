const express = require("express");
const router = express.Router();

const db = require("../../config/db");

const { checkSchema, validationResult } = require("express-validator");
const { typesValidation, itemsValidation } = require("../../validation/cti");

// @route   GET api/cti/
// @desc    Fetches all categorie, types, and items from the database
// @access  Private
router.get("/", (req, res) => {
    const query = `SELECT * FROM categories JOIN types USING(category_id) JOIN items USING(type_id)`;
    db.query(query, (err, rows, field) => {
        if (err) {
            return res.status(500).send({error_msg: "A database error has occured"})
        } else if (rows.length > 0) {
            return res.status(200).send(err);
        } else {
            return res.status(404).send({error_msg: "No categories in database"});
        }
    });
})

// @route   GET api/cti/categories
// @desc    Fetches all the categories from the database
// @access  Private
router.get("/categories", (req, res) => {
    const query = `SELECT * FROM categories`;
    
    db.query(query, (err, rows, fields) => {
        if (err) {
            return res.status(500).send({error_msg: "A database error has occured"});
        } else {
            return res.status(200).send(rows);
        }
    });
});

// @route   GET api/cti/types
// @desc    Fetches all the types that fall under a specified category from the database
// @access  Private
router.get("/types", checkSchema(typesValidation), (req, res) => {
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty() === true) {
        const { category_id } = req.query;
        const query = `SELECT * FROM categories JOIN types USING(category_id) WHERE category_id=${db.escape(category_id)}`;

        db.query(query, (err, rows, fields) => {
            if (err) {
                return res.status(500).send({error_msg: "A database error has occured"});
            } else if (rows.length > 0) {
                return res.status(200).send(rows);
            } else {
                return res.status(404).send({error_msg: "Type not found"});
            }
        });
    } else {
        return res.status(400).send({error_msg: "Bad request", ...validationErrors});
    }
});

// @route   GET api/cti/items
// @desc    Fetches all the items that fall under a specified type and category from the database
// @access  Private
router.get("/items", checkSchema(itemsValidation), (req, res) => {
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty() === true) {
        const { category_id, type_id } = req.query;
        const query = `SELECT * FROM categories JOIN types USING(category_id) JOIN items USING(type_id) WHERE category_id=${db.escape(category_id)} AND type_id=${db.escape(type_id)}`;

        db.query(query, (err, rows, fields) => {
            if (err) {
                return res.status(500).send({error_msg: "A database error has occured"});
            } else if (rows.length > 0) {
                return res.status(200).send(rows);
            } else {
                return res.status(404).send({error_msg: "Item not found"});
            }
        });
    } else {
        return res.status(400).send({error_msg: "Bad request", ...validationErrors});
    }
});

module.exports = router;