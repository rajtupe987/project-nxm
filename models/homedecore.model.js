const mongoose = require("mongoose");


const homeshcema = mongoose.Schema({
    id:Number,
     img:String,
     price:Number,
     content:String
})


const homeModel=mongoose.model("home",homeshcema);



module.exports={
    homeModel
}