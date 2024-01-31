const express = require("express");

const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")

router.get("/",authcontrollers.home)

router.route("/register").get(authcontrollers.register)

module.exports = router;
