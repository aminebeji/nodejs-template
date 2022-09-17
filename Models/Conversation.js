const mongoose = require("mongoose");
const Conversations = mongoose.Schema(
  {
    members: [{ type: mongoose.Types.ObjectId, ref: "users", required: true }],
    lastSender: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    LastMessage: {
      type: String,
  
      required: false,
    },
    LastMessageType: {
      type: String,
      enum: ["text", "address", "picture", "voice", "video", "request" , "accept"],
      default: "text",
    },
    Deleted: [{ type: mongoose.Types.ObjectId, ref: "users", required: false }],
    Seen: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("conversations", Conversations);
