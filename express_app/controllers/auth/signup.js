const { User } = require("../../models");
const { WeakPasswordError, DetailMissingError, EmailFormatError, EmailRepetitionError } = require("./errors")
const { getUserByEmail, makeJWTToken } = require("./utils")



module.exports = async function (data) {
    if (!["firstName", "emailId", "password"].every(x => data[x])) {
        throw new DetailMissingError();
    }
    if (!EmailValidationStatus(data.emailId)) {
        throw new EmailFormatError();
    }
    if (await getUserByEmail(data.emailId)) {
        throw new EmailRepetitionError();
    }
    if (!meetsPasswordStrength(data.password)) {
        throw new WeakPasswordError();
    }

    const user = User.build(data);
    await user.save()

    const token = await makeJWTToken(user)
    return {
        id: user.id,
        firstName: user.firstName,
        token,
    };
}
function EmailValidationStatus(emailId) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (pattern.test(emailId)) {
        return true;
    } else {
        return false;
    }
}



function meetsPasswordStrength(password) {
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regularExpression.test(password)) {
        return true;
    } else {
        return false;
    }
}

