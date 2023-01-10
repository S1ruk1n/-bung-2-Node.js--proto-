
const https = require("https");
const fs = request("fs");

const express = require("express");

const app = express();


https
    .createServer(app)
    .listen(3456, ()=>{
        console.log('server is runing at port 3456')
    });

app.get('/', (req,res)=>{
    res.send("Hallo.")
})