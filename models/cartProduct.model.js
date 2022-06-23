// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const cartProduct = db.define('cartProducts', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: 'enabled',
    }
},{
    freezeTableName: true,
})

module.exports = { cartProduct };
