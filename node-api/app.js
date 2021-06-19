const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const loginDetails = require("./login");
const registerDetails = require("./register")
const url = "mongodb://localhost/kalyanfirstdb"

mongoose.connect(url , {useNewUrlParser:true});

const con = mongoose.connection;

con.on("open" , ()=>{
    console.log("connectiong to db....");
})

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login" , loginDetails);
app.use("/login/register" , registerDetails);

app.listen("8082" , ()=>{
    console.log("port 8082 is running .....");
})