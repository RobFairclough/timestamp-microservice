const app = require("express")();
const bodyParser = require("body-parser");
const { sendTimestamp } = require("./controllers/timestamp");

app.get("/", (req, res) => {
  res.send({
    msg: `Usage: [url]/api/timestamp/:date_string
    valid string can be parsed by 'new Date(date_string)
    empty string will return current timestamp
    valid strings willl return a JSON with unix time and utc time
    error will return a json structure 'error: invalid date'`
  });
});

app.get("/api/timestamp/:date_string", sendTimestamp);
module.exports = app;
