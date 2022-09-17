const mongoose = require("mongoose");
const User = mongoose.Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: false },
    Photo: { type: String },
    FirstLogin: { type: Boolean, default: true },
    Code: { type: Number, required: false },
    Verified: { type: Boolean, required: true, default: false },
    Pins: { type: Number, required: true, default: 3 },
    birthdate: { type: String, required: false },
    password: { type: String, required: false },
    lastSeen: { type: Date, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", User);
