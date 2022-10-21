const { Family } = require("../../models")



module.exports = async function (id) {
    const deletedFamily = await Family.findOne({ where: { id: id } });
    await deletedFamily.destroy();
    return deletedFamily;
}
