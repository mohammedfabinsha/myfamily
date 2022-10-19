const { Family } = require("../../models")
const { DetailMissingError } = require("./error")

module.exports = async function (data) {
    if (!["id", "familyName", "description"].every(x => data[x])) {
        throw new DetailMissingError();
    }

    const family = family.build(data);
    await user.save()
    return family;
}



