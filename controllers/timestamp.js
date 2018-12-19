const { getTimestamp } = require("../models/timestamp");
exports.sendTimestamp = (req, res, next) => {
  let timestamp = "";
  if (req.params.date_string) timestamp = req.params.date_string;
  getTimestamp(timestamp, (err, time) => {
    if (err) next(err);
    else res.send(time);
  });
};
