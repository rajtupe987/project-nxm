const mongoose = require("mongoose");


const storeshcema = mongoose.Schema({
    id:Number,
     img:String,
     price:Number,
     content:String
})


const storeModel=mongoose.model("store",storeshcema);



module.exports={
    storeModel
}