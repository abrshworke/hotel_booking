
const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name : {
        type : String,
        require : true,
    },


    rentperday : {
        type : Number ,
        require : true
    } ,

    imageurls  : [],
     currentbooking : [],
     
    type : {
        type : String,
        require : true
    },

    description : {
        type : String,
        require : true
    }
    
 
} , {  
    timeStamp : true
}); 

const roommodel = mongoose.model("Room" , roomSchema); 
module.exports = roommodel; 
 





