const { Family } = require("../../models")
const { op } = require("sequelize");


module.exports = async function (data) {
    const families = await Family.findAll();
    return families;


}
