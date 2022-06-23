// utils
const { db } = require('../utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const tracking = db.define('trackings', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    purchaseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    parcels: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled',
    }
}, {
    freezeTableName: true,
})

module.exports = { tracking };
