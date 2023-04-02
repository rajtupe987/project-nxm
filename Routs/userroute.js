const express=require("express");
const  {userModel}=require("../models/usermodel")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();


const userrouter=express.Router();

userrouter.post("/register",async(req,res)=>{
 

        const {name,email,gender,city,password} = req.body;
   
        const mail=await userModel.find({"email":email});
     
        if(mail.length>0){
         res.send({"msg":"user alreay registered please login"})
        }else{
         try {
         
             bcrypt.hash(password,5,async(err,hash)=>{
         
                 if(err){
                     res.send(({"msg":"Sonmething went wrong"}))
                 }else{
                    const app= new userModel({name,email,gender,city,password:hash});
                    await app.save();
                     res.send(({"mag":"New user created"}))
                 }
             })
            } catch (error) {
             res.send(({"msg":"Sonmething went wrong"}))
            }
    
        }
    

});


userrouter.post("/login",async(req,res)=>{
    
    try {
        const pageloding=req.body;
        const user=await userModel.findOne({email:pageloding.email});

        if(!user){
            return res.send({"msg":"Please Signup .."})
        }

        const passcheck=await bcrypt.compare(
            pageloding.password,
            user.password
        )

        if(passcheck){
            let token=await jwt.sign({email:user.email,userId:user._id},process.env.s_key);
            res.send({"msg":"Login succesfull",token})
        }else{
            res.send({"msg":"Invalid details found"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={
    userrouter
}

