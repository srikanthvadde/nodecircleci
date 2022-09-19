const express = require("express");
const cors = require("cors");


const port = '8080';
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/getDetails",(req,res)=>{
    console.log("fgfhfhfh")
    res.send("Hello Divya srikanth");
})

app.get("/getplus",(req,res)=>{
    res.send("Hello Divya srikanth noted");
})


app.listen(port,()=>{
    console.log("Server running successfully",port);
})

module.exports = app;