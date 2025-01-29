
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const roomroutes = require("./routes/roomroutes"); 
app.use("/api/rooms", roomroutes); 

const bookroomroute = require("./routes/bookroom"); 
app.use("/api/bookroom", bookroomroute); 

const userroutes = require("./routes/userroutes");
app.use("/api/users", userroutes);

const feedbackroute = require("./routes/feedbackroutes");
app.use("/api/feedbacks", feedbackroute);

mongoose.connect(
  'mongodb+srv://abrehamworke78:abrehamworke@clusterbackend.pery6.mongodb.net/cluster?retryWrites=true&w=majority&appName=ClusterBackend'
)
  .then(() => { 
    console.log("Connected to MongoDB successfully!");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});












