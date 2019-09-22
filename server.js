/* 
    IMPORTANT NOTE:
    Some of the following code is used by many apps as it is the standard and recommended way in setting up a NodeJS w/ ExpressJS server
*/

const express = require("express");
const app = express();

app.use("/api/demo", require("./routes/api/demo"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
