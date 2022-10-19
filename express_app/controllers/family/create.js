const { Family } = require("../../models")
const { DetailMissingError } = require("./error")

module.exports = async function (data) {
    if (!["familyName", "description"].every(x => data[x])) {
        throw new DetailMissingError();
    }

    const family = Family.build(data);
    await family.save()
    return family;
}



