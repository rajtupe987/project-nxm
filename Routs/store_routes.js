const express=require("express");
const  {storeModel}=require("../models/store.model")

require("dotenv").config();


const storeroute=express.Router();

storeroute.get("/",async(req,res)=>{
    try {
        let data=await storeModel.find();
       res.send(data);
    } catch (error) {
        res.send({"msg":"Error while finding the data"})
    }
})
storeroute.post("/add",async(req,res)=>{
    try {
       
        const data=new storeModel(req.body);
         await data.save();
         res.send("data has been added")
    } catch (error) {
        res.send("error while adding data")
    }
})


module.exports={
    storeroute
}

