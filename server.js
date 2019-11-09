/* 
    IMPORTANT NOTE:
    Some of the following code is used by many apps as it is the standard and recommended way in setting up a NodeJS w/ ExpressJS server
*/

const express = require("express");
const app = express();

app.use(express.json()); // for json parsing
app.use(express.urlencoded({extended: true})); // for x-www-form-urlencoded parsing

app.use("/api/demo", require("./routes/api/demo"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/tickets", require("./routes/api/tickets"));
//app.use("/api/login", require("./routes/api/login"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
