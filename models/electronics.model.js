const mongoose = require("mongoose");


const eleshcema = mongoose.Schema({
    id:Number,
     img:String,
     price:Number,
     content:String
})


const eleModel=mongoose.model("electronic",eleshcema);



module.exports={
    eleModel
}