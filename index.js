var express=require("express");
var app=express();

var fs=require('fs');
const readline = require('readline-sync');

app.get("/read",(req,res)=>{
    fs.readFile('matter.txt', (err, data) => {
        if (err) throw err;
        res.send(data.toString('utf-8'));
    });
});
app.get("/write",(req,res)=>{
    var input=readline.question("What is your name?");
    fs.appendFile('matter.txt','\t'+input,(err)=>{
        if(err) throw err;
        res.send("data written successfully")
    })
});

app.listen(7867,()=>{
    console.log("server running on a port");
});


