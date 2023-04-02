const express=require("express");
const  {homeModel}=require("../models/homedecore.model")

require("dotenv").config();


const homeroute=express.Router();

homeroute.get("/",async(req,res)=>{
    try {
        let data=await homeModel.find();
       res.send(data);
    } catch (error) {
        res.send({"msg":"Error while finding the data"})
    }
})
homeroute.post("/add",async(req,res)=>{
    try {
       
        const data=new homeModel(req.body);
         await data.save();
         res.send("data has been added")
    } catch (error) {
        res.send(error)
        console.log(error)
        res.send("error while adding data")
    }
})


module.exports={
    homeroute
}