const { Family } = require("../../models")



module.exports = async function (id) {
    const family = await Family.findOne({ where: { id: id } });
    return family;
}





