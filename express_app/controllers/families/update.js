
const { Family } = require("../../models")


module.exports = async function (id, data) {
    const updateFamily = await Family.findOne({ where: { id: id } });
    updateFamily.set(data);
    await updateFamily.save();
    return updateFamily;
}
