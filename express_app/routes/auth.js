const express = require('express')
const authController = require("../controllers/auth")

const router = express.Router()



router.post("/signup", (req, res) => {
    const data = authController.signup(req.body);
    res.send(data);
});

router.post("/login", (req, res) => {
    const data = authController.login(req.body);
    res.send(data);
});

module.exports = router