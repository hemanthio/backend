const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("learing mern stack")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`im learning backend and port is at ${PORT}` )
})