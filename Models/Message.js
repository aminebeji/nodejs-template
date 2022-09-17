const mongoose = require("mongoose");
const Messages = mongoose.Schema(
  {
    content: { type: String, required: false },
    type: {
      type: String,
      enum: ["text", "address", "picture", "voice", "video" ,  "request" , "accept"],
      default: "text",
    },
    file: { type: mongoose.Types.ObjectId, ref: "files", required: false },
    Sender: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    convId: {
      type: mongoose.Types.ObjectId,
      ref: "conversations",
      required: true,
    },
    Seen: { type: Boolean, default: false },
    Locked: { type: Boolean, default: true },
    Deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("messages", Messages);
