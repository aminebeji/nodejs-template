const mongoose = require("mongoose");
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = mongoose
  .connect(process.env.MONGODB_CONNSTRING , options)
  .then(() => console.log("Connected to MongoDB server"))
  .catch((error) => console.log(error));