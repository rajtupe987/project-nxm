const express=require("express");
const  {buetyModel}=require("../models/buetycare.model")

require("dotenv").config();


const buetyroute=express.Router();

buetyroute.get("/",async(req,res)=>{
    try {
        let data=await buetyModel.find();
       res.send(data);
    } catch (error) {
        res.send({"msg":"Error while finding the data"})
    }
})
buetyroute.post("/add",async(req,res)=>{
    try {
       
        const data=new buetyModel(req.body);
         await data.save();
         res.send("data has been added")
    } catch (error) {
        res.send(error)
        console.log(error)
        res.send("error while adding data")
    }
})


module.exports={
    buetyroute
}