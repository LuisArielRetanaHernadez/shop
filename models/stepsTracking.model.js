// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const stepsTracking = db.define('stepsTracking', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    stepNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    stepName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    stepDescription: {
        type: DataTypes.TEXT("medium"),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled',
    }
}, {
    freezeTableName: true,
})

module.exports = { stepsTracking };
