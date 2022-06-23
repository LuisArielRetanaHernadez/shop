// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const comment = db.define('comments', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    comment: {
        type: DataTypes.TEXT("medium"),
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},{
    freezeTableName: true,
})

module.exports = { comment };
