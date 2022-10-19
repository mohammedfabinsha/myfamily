const express = require('express')
const authController = require("../controllers/auth")

const router = express.Router()

const { MyFamilyError } = require("../controllers/errors")



router.post("/signup", (req, res) => {
    authController.signup(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (err instanceof MyFamilyError) {
                res.status(err.http_status_code);
                res.send({
                    error_code: err.name,
                    message: err.message,
                    data: {}
                })
            } else {
                res.status(500);
                // res = {
                //     status:function(error_code) {

                //     }
                // }
                res.send(err);
            }
        })
});

router.post("/login", (req, res) => {
    const data = authController.login(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (err instanceof MyFamilyError) {
                res.status(err.http_status_code);
                res.send({
                    error_code: err.name,
                    message: err.message,
                    data: {}
                })
            } else {
                res.status(500);
                res.send(err);
            }
        })
});


module.exports = router