const express=require("express");
const {connection}=require("./config/db");
const {userrouter}=require("./Routs/userroute");
const {storeroute}=require("./Routs/store_routes");
const {fashionroute}=require("./Routs/fashion_routes");
const {buetyroute}=require("./Routs/buety_route");
const {homeroute}=require("./Routs/homedecore_route");
const {eleroute}=require("./Routs/ele_route")
const {Authenticator}=require("./middleware/Authenticator")
require("dotenv").config();
const cors=require("cors")


const app=express();
app.use(express.json());
app.use(cors())

app.use("/store",storeroute);
app.use("/fashion",fashionroute);
app.use("/buety",buetyroute);
app.use("/home",homeroute);
app.use("/ele",eleroute)

app.use("/users",userrouter);
app.use(Authenticator);

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


app.listen(process.env.port,async()=>{
    
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error while connecting");
        console.log(error)
    }
    console.log(`port is runnit at ${process.env.port}`)
})