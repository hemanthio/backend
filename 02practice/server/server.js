const express = require('express')
const app = express();


app.get("/",(req,res)=>{
res.status(200).send('welcome to mern')

})



const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})