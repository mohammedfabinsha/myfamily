class MyFamilyError extends Error {
    constructor(message) {
        super(message);
        this.message = message || "Unknown Error Happened";
        this.name = "MY_FAMILY_ERROR";
        this.http_status_code = 500;
    }
}

class DetailMissingError extends MyFamilyError {
    constructor(message) {
        super(message);
        this.message = message || "Please provide all required fields";
        this.name = "DETAILS_MISSING_ERRROR";
        this.http_status_code = 400;
    }
}


module.exports = {
    MyFamilyError,
    DetailMissingError
}