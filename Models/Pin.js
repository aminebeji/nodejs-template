const mongoose = require("mongoose");
const Pin = mongoose.Schema(
  {
    name: { type: String },
    files: [{ type: mongoose.Types.ObjectId, ref: "files", required: false }],
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    hours: { type: Number, required: true },
    munite: { type: Number, required: true },
    seconds: { type: Number, required: true },
    Radius: { type: Number, required: false, default: 30 },
    description: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pin", Pin);
