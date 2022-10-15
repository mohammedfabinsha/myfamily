const { MyFamilyError, DetailMissingError } = require("../errors")


class EmailFormatError extends MyFamilyError {
    constructor(message) {
        super(message);
        this.name = "EMAIL_FORMAT_ERROR";
        this.http_status_code = 400;
        this.message = "Please provide a valid email"
    }
}

class EmailRepetitionError extends MyFamilyError {
    constructor(message) {
        super(message);
        this.name = "EMAIL_REPETITION_ERROR";
        this.http_status_code = 400;
        this.message = "Email already registered"
    }
}


class WeakPasswordError extends MyFamilyError {
    constructor(message) {
        super(message);
        this.name = "WEAK_PASSWORD_ERROR";
        this.http_status_code = 400;
        this.message = "Please provide a strong Password"
    }
}


module.exports = {
    MyFamilyError,
    WeakPasswordError,
    DetailMissingError,
    EmailFormatError,
    EmailRepetitionError

}