const fs = require("fs")
const express = require('express')
var bodyParser =require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json())

// app.use(middleware)
// function middleware(req,res,next){
//   // res.send("error from middleware")
//   next();
// }

function calculate(counter) {
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum = sum + i;
    }
    return sum
}


app.get('/', (req, res) => {
    const sumOfIntegers = calculate(100)
  res.send(`sum of numbers is ${sumOfIntegers}`)
})


app.post('/handlesum', (req, res) => {
    var counter = req.body.counter
    const handlesumof =calculate(counter)
    res.send(`sum is ${handlesumof}`)
   
})

app.post('/han', (req, res) => {
  var number= req.headers.number
  
  res.send(`sum is ${number}`)
 
})

// app.get('/:username', (req, res) => {
//   var username = req.params.username
 
//   res.send(`hello ${username}`)
 

// })

app.get('/username', (req, res) => {
  var username= req.query.username
 
  res.send(`hello ${username}`)
 

})

app.post("/handle",(req,res)=>{
  res.send("hello word")
})
app.put("/handler",(req,res)=>{
  res.send("hello word")
})

app.delete("/handless",(req,res)=>{
  res.send("hello word")
})





app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})




