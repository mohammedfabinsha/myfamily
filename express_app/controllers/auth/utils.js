const jwt = require("jsonwebtoken");
const { User } = require("../../models");


async function getUserByEmail(emailId) {
    const user = await User.findOne({ where: { emailId: emailId } })
    return user;
}

function makeJWTToken(user) {
    return new Promise((res, rej) => {
        jwt.sign(
            { user: user.get("id") },
            "SECRET",
            {},
            (err, token) => {
                res(token)
            }
        )
    })
}

module.exports = {
    getUserByEmail,
    makeJWTToken,
}