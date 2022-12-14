const express = require('express')
// const { authMiddleware } = require("../middlewares")
const familyController = require("../controllers/families")

const router = express.Router()
// router.use(authMiddleware);
const { MyFamilyError } = require("../controllers/errors")

router.get("/", (req, res) => {
    familyController.list(req.body)
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
        });
});

router.get("/:id", (req, res) => {
    familyController.getSingle(req.params.id)
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
        });
});

router.post("/", (req, res) => {
    familyController.create(req.body)
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
        });
});

router.put("/:id", (req, res) => {
    familyController.update(req.params.id, req.body)
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
        });
});


router.delete("/:id", (req, res) => {
    familyController.delete(req.params.id)
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
        });
});


module.exports = router 
