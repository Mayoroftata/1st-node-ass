// console.log('Hello World');
const app = require("express")();
const path = require('path')
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(5000,(err)=>{
    if (err) {
        console.log("app is not working");
    } else{
        console.log("My app is working");
    }
    
    
})