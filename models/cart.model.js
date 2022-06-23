// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const cart = db.define('carts', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    aquantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    priceTotal: {
        type: DataTypes.DECIMAL(5, 2),
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: 'enabled',
    },
},{
    freezeTableName: true,
})

module.exports = { cart };
