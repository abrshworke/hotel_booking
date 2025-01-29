const express = require("express");
const router = express.Router();
const room = require("../models/user");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const usermodel = require("../models/user"); 



router.get("/getuser" , async (req , res)  => {
    try {
        const users = await room.find({});
        res.send(users) 
    } catch (error) {
        return res.status(400).json({mesaage : error})
    }
})






router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body; 
  
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, password) are required",
      }); 
    }
  
    try {
      const existingUser = await usermodel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email is already registered",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await usermodel.create({ name, email, password: hashedPassword });
      res.status(201).json({
        success: true,
        message: "User created successfully!",
        user,
      });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({
        success: false,
        message: "Error creating user",
        error: err.message,
      });
    }
  });
  
  
  
   
   
  
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Both email and password are required",
      });
    }
  
    try {
      
      const user = await usermodel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        token, 
      });
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).json({
        success: false,
        message: "Error logging in",
        error: err.message,
      });
    }
  });
  
  
  
  /////////////
  
  
  
  
  router.post('/adminsignup', async (req, res) => {
    const { name, email, password } = req.body; 
  
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, password) are required",
      }); 
    }
  
    try {
      const existingUser = await usermodel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email is already registered",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await usermodel.create({ name, email, password: hashedPassword });
      res.status(201).json({
        success: true,
        message: "User created successfully!",
        user,
      });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({
        success: false,
        message: "Error creating user",
        error: err.message,
      });
    } 
  });
  
  
  
  
  
  
  router.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Both email and password are required",
      });
    }
  
    try {
      
      const user = await usermodel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        token, 
      });
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).json({
        success: false,
        message: "Error logging in",
        error: err.message,
      });
    }
  });
  
  
  
  
module.exports = router;