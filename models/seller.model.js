// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const seller = db.define('sellers', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    firstName: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING(25),
        allownull: false,
    },
    surname: {
        type: DataTypes.STRING(55),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(88),
        unique: true,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(88),
        allowNull: true,
    },
    photoPer: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    identificacion: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled'
    }
},{
    freezeTableName: true
});

module.exports = { seller }
