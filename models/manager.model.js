// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const manager = db.define('managers', {
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
    year: {
        type: DataTypes.INTEGER(2),
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
    sex: {
        type: DataTypes.CHAR(),
        allowNull: true
    },
    identificacion: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    photoPer: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    rol: {
        type: DataTypes.STRING(55),
        allowNull: true,
    },
    shift: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    departure: {
        type: DataTypes.DATE(),
        allowNull: true,
    },
    entry: {
        type: DataTypes.DATE(),
        allowNull: true,
    },
    hoursWorked: {
        type: DataTypes.INTEGER(2),
        allowNull: true,
    },
    antiqity: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled',
        allowNull: true,
    }
},{
    freezeTableName: true,
})

module.exports = { manager };

