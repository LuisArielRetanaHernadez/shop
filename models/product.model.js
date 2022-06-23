// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const product = db.define('products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    title: {
        type: DataTypes.STRING(80),
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING(80),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
    productShipment: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
    discount: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        defaultValue: 0,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled',
    }
}, {
    freezeTableName: true
})

module.exports = { product }