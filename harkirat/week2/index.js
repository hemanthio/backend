const fs = require("fs")
const express = require('express')
const app = express()
const port = 3000

function calculate(counter) {
    var sum=0;
    for(var i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum
}


// app.get('/', (req, res) => {
//     const sumOfIntegers = calculate(100)
//   res.send(`sum of numbers is ${sumOfIntegers}`)
// })
app.get('/handlesum', (req, res) => {
    var counter = req.query.counter
    const handlesumof =calculate(counter)
    res.send(`sum is ${handlesumof}`)
   
  res.send(`hello world namste how are you`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




