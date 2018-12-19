module.exports = {
  getTimestamp(timestamp, cb) {
    const converted = !timestamp ? new Date() : new Date(timestamp);
    if (converted.toString() === "Invalid Date") {
      // not good error handling but the project spec asks for this
      cb(null, { error: "Invalid Date" });
    } else {
      const obj = {};
      obj.unix = converted.getTime();
      obj.utv = converted.toUTCString();
      console.log(obj);
      cb(null, obj);
    }
  }
};
