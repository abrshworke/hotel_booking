const express = require("express");
const router = express.Router();
const room = require("../models/room");



router.get("/getroom" , async (req , res)  => {
    try {
        const rooms = await room.find({});
        res.send(rooms) 
    } catch (error) {
        return res.status(400).json({mesaage : error})
    }
})





router.post("/addroom", async (req, res) => {
    const { name,rentperday, imageurls, type, description } = req.body;

    if (!name || !rentperday || !type || !description) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const newRoom = await room.create({
            name,
            rentperday,
            imageurls,
            type,
            description
        });

        res.status(201).json({
            success: true,
            message: "Room added successfully",
            room: newRoom
        });
    } catch (error) {
        console.error("Error adding room:", error);
        res.status(500).json({
            success: false,
            message: "Error adding room",
            error: error.message
        });
    }
});


router.delete("/deleteroom/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedroom = await room.findByIdAndDelete(id);
      if (!deletedroom) {
        return res.status(404).json({ message: "room not found" });
      }
      res.status(200).json({ message: "room deleted successfully", deletedroom });
    } catch (error) {
      console.error("Error deleting room:", error.message);
      res.status(500).json({
        message: "Error deleting room",
        error: error.message,
      });
    }
  });

module.exports = router;
