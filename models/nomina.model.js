// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const nomani = db.define('nomina', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    number: {
        type: DataTypes.INTEGER(19),
        allowNull: true,
    },
    validity: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bank: {
        type: DataTypes.STRING(35),
        allowNull: true,
    },
    nip: {
        type: DataTypes.INTEGER(3),
    }
})
