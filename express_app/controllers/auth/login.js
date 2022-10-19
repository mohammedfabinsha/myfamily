const { DetailMissingError, EmailNotFoundError, IncorrectPasswordError } = require("./errors");
const { getUserByEmail, makeJWTToken } = require("./utils");


module.exports = async function (data) {
    if (!["emailId", "password"].every(x => data[x])) {
        throw new DetailMissingError();
    }
    const user = await getUserByEmail(data.emailId)
    if (!user) {
        throw new EmailNotFoundError();
    }
    if (data.password != user.password) {
        throw new IncorrectPasswordError();
    }

    const token = await makeJWTToken(user);
    return {
        user: user.id,
        firstName: user.firstName,
        token,
    }
}



