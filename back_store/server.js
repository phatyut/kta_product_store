const express = require("express")
const app = express()
const port = 9000;
app.get("/test",(req,res)=>{
    res.send("I love you")
})
app.listen(port ,()=>{
    console.log("Server running on port :" + port )
})