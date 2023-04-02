const express=require("express");
const  {fashionModel}=require("../models/fashion.model")

require("dotenv").config();


const fashionroute=express.Router();

fashionroute.get("/",async(req,res)=>{
    try {
        let data=await fashionModel.find();
       res.send(data);
    } catch (error) {
        res.send({"msg":"Error while finding the data"})
    }
})
fashionroute.post("/add",async(req,res)=>{
    try {
       
        const data=new fashionModel(req.body);
         await data.save();
         res.send("data has been added")
    } catch (error) {
        res.send("error while adding data")
    }
})


module.exports={
    fashionroute
}