// console.log('Hello World');
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


app.listen(5000,(err)=>{
    if (err) {
        console.log("app is not working");
    } else{
        console.log("My app is working");
    }
    
    
})