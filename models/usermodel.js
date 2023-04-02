const mongoose = require("mongoose");


const lshcema = mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    city:String,
    password: String
})


const userModel=mongoose.model("nxm",lshcema);



module.exports={
    userModel
}