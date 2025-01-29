

const mongoose = require("mongoose");

const bookedRoomSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  name: { type: String, required: true },
  rentperday: { type: Number, required: true },
  type: { type: String, required: true },
  imageurls: [{ type: String }],
  status: { type: String, default: "Booked" }, // Default value is good
});

const BookedRoom = mongoose.model("BookedRoom", bookedRoomSchema);

module.exports = BookedRoom;
