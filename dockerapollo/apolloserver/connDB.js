const mongoose = require("mongoose");

const connDb = mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Success to Connect Database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connDb;
