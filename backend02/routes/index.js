var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get("/",function(req,res){
  res.render("index")
})

router.get("/create", async function(req,res){
 const createuser = await userModel.create({
username:"hemanth",
age:12,
name:"hemanth"
 })
 res.send(createuser);
})


module.exports = router;
