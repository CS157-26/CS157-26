/*
    IMPORTANT NOTE:
    The following code is an altered form of the code from the official ExpressJS website.
    It is the standard and recommended method of connecting a NodeJS + ExpressJS server to a MySQL database.
    URL: https://expressjs.com/en/guide/database-integration.html#mysql
*/

const mysql = require("mysql");
const credentials = require("./key");

const connection = mysql.createConnection(credentials);

module.exports = connection;
