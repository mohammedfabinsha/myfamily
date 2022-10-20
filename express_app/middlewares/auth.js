const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
  const token = (req.headers["authorization"] || "").split(" ")[1];

  jwt.verify(token, 'SECRET', function (err, decoded) {
    if (err) {
      res.status(401);
      res.send({
        error_code: "AUTHENTICATION_ERROR",
        message: "Invalid Bearer Token"
      });
    } else {
      next();
    }

  })
}
