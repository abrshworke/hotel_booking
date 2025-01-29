

const express = require("express");
const router = express.Router();
const Room = require("../models/room"); 
const BookedRoom = require("../models/bookedRoom"); 


router.get("/getbookedroom", async (req, res) => {
  try {
    const bookedRooms = await BookedRoom.find({});
    res.send(bookedRooms); 
  } catch (error) {
    return res.status(400).json({ message: error.message }); 
  }
});

// Route to book a room
router.post("/", async (req, res) => {
  try {
    const { roomId } = req.body;

    
    const updatedRoom = await Room.findByIdAndUpdate(roomId, { status: "Booked" }, { new: true });

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    const bookedRoom = new BookedRoom({
      roomId: updatedRoom._id,
      name: updatedRoom.name,
      rentperday: updatedRoom.rentperday,
      type: updatedRoom.type,
      imageurls: updatedRoom.imageurls,
    });

    await bookedRoom.save(); 

    res.status(200).json({ message: "Room booked successfully", updatedRoom });
  } catch (error) {
    console.error("Error booking room:", error);
    res.status(500).json({ message: "Error booking room", error: error.message });
  }
});

module.exports = router;
