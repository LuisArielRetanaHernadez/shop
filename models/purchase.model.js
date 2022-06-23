// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const purchase = db.define('purchases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    priceTotal: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'purchased',
    },
},{
    freezeTableName: true,
})

module.exports = { purchase };
