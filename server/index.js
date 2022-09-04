const express = require("express");
const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const cors =require("cors")
const bodyParser = require("body-parser")
const app = express();
const port = 5500;
const db = require("./.env")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes =require("./routes/itemroutes")


app.use(cors())
console.log("use");
app.use("/api",routes);
console.log("useww");

try{
    mongoose.connect("mongodb+srv://zenith:Zenith1997@cluster0.gte9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Database connected successfully");
}catch(err){
    console.log(err);
}





app.listen(port,(req,res)=>{
    console.log("hi");
})