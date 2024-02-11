const express = require("express")
const app = express();

app.set("view engine","ejs")

app.use(express.static("/"))


app.get("/",(req,res)=>{
    res.render("index.ejs");
    
})
app.get("/contact",(req,res)=>{
    res.send("contact hello");
    
})
app.get("/profile/:username",(req,res)=>{
    let {username} =req.params
    res.send(`hello and welcome ${username}`);
    
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("port listening")
})