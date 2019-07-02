var express=require("express");
var app=express();

var fs=require('fs');
const readline = require('readline-sync');
//const replaceString = require('replace-string');
app.get("/read",(req,res)=>{
    var currentName=readline.question("Enter your file's current name");
    fs.readFile(currentName, (err, data) => {
        if (err) throw err;
        res.send(data.toString('utf-8'));
    });
});
app.get("/writeOrUpdate",(req,res)=>{
    var currentName=readline.question("Enter your file's current name");
    var input=readline.question("Enter Text....");
    fs.appendFile(currentName,'\t'+input,(err)=>{
        if(err) throw err;
        res.send("data written successfully")
    })
});
app.get("/deleteFile",(req,res)=>{
    var currentName=readline.question("Enter your file's current name");
  fs.unlink(currentName,(err)=>{
      if(err) throw err;
      res.send("File deleted successfully");
  })
});
app.get("/renameFile",(req,res)=>{
    var currentName=readline.question("Enter your file's current name");
    var newName=readline.question("Enter a new name for file...");
    fs.rename(currentName,newName,(err)=>{
        if(err) throw err;
        res.send("File renamed successfully");
    })
});






app.listen(7867,()=>{
    console.log("server running on a port");
});


