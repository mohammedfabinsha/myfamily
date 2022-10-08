const express = require('express')
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("listMembers")
});

router.get("/getSingle", (req, res) => {
    res.send("showMembers")
});

router.post("/create", (req, res) => {
    res.send("memberCreated")
});

router.put("/update", (req, res) => {
    res.send("memberUpdated")
});


router.delete("/delete", (req, res) => {
    res.send("memberDelected")
});

module.exports = router