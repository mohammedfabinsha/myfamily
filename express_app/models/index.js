const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite", {
    storage: "./sqlite.db"
});

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync()
module.exports = {
    User

} 