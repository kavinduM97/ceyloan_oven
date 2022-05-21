const express = require("express");
const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const app = express();
const port = 5500;
const db = require("./.env")



try{
    mongoose.connect("mongodb+srv://zenith:Zenith1997@cluster0.gte9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Database connected successfully");
}catch(err){
    console.log(err);
}
