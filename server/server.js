require('dotenv').config()

const express = require("express")

const app = express();
const router = require("./router/auth-router")
const connectDb =require("./utils/db")

app.use(express.json())

app.use("/",router)

// app.get("/",(req,res)=>{
//     res.status(200).send("learing mern stack")
// })

const PORT = 5000;

connectDb().then(()=>{

app.listen(PORT,()=>{
    console.log(`im learning backend and port is at ${PORT}` )
})

})