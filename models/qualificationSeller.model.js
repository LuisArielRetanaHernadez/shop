// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const qualificationSeller = db.define('qualificationSeller', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    qualification: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
    },
    comment: {
        type: DataTypes.TEXT("medium"),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},{
    freezeTableName: true,
})

module.exports = { qualificationSeller };
