const express = require("express")

const app = express();


const PORT =4000
app.listen(PORT,()=>{
    console.log(`listen to port no ${PORT}`)
})

// app.use((req,res)=>{
  
//     res.send("<h1>hello world</h1>")
// })

app.get("/name",(req,res)=>{
    res.send("<h3>hii namste</h3>")
    console.log("coming from apple")
})
app.get("/",(req,res)=>{
    res.send("<h1>vattakai</h1>")
})

app.get("/:username",(req,res)=>{
    let {username,id} =req.params
    res.send(`<h1>welcome to ${username} </h1>`)
})