/* 
    IMPORTANT NOTE:
    Some of the following code is used by many apps as it is the standard and recommended way in setting up a NodeJS w/ ExpressJS server
*/

const express = require("express");
const app = express();
const passport = require('passport');

app.use(express.json()); // for json parsing
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded parsing

require('./config/passport');
app.use(passport.initialize());

app.use("/api/demo", require("./routes/api/demo"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/tickets", require("./routes/api/tickets"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/attempts", require("./routes/api/attempts"));
app.use("/api/analytics", require("./routes/api/analytics"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
