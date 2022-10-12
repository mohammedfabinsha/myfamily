const express = require('express')
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("listFamilies")
});

router.get("/getSingle", (req, res) => {
    res.send("showFamily")
});

router.post("/create", (req, res) => {
    res.send("familyCreated")
});

router.put("/update", (req, res) => {
    res.send("familyUpdated")
});

router.delete("/delete", (req, res) => {
    res.send("FamilyDeleted")
});


module.exports = router
