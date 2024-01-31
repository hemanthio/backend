const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("mern coming from router");
});

router.route("/register").get((req,res)=>{
    res.status(200).send("registeraton page");
})

module.exports = router;
