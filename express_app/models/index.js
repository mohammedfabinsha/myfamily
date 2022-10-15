const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./sqlite.db", {
    dialect: "sqlite",
    storage: "./sqlite.db"
});

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    emailId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => { await sequelize.sync() })()

module.exports = {
    User
} 