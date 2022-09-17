const mongoose = require("mongoose");
const User = mongoose.Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", User);
