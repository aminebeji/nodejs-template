const mongoose = require("mongoose");
const Files = mongoose.Schema(
  {
    path: { type: String, required: true },
    urlLecture: { type: String, required: true },
    filename: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("files", Files);
