const express=require("express");
const  {eleModel}=require("../models/electronics.model")

require("dotenv").config();


const eleroute=express.Router();

eleroute.get("/",async(req,res)=>{
    try {
        let data=await eleModel.find();
       res.send(data);
    } catch (error) {
        res.send({"msg":"Error while finding the data"})
    }
})
eleroute.post("/add",async(req,res)=>{
    try {
       
        const data=new eleModel(req.body);
         await data.save();
         res.send("data has been added")
    } catch (error) {
        res.send("error while adding data")
    }
})


module.exports={
    eleroute
}