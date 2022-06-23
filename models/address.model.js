// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const address = db.define('addresses', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    street: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    colony: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    contry: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    postCard: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    inlandNumber: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
    },
    outerNumber: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    reference: {
        type: DataTypes.TEXT("medium"),
        allowNull: true,
    },
    proof: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(15),
        defaultValue: 'enabled'
    }
},{
    freezeTableName: true,
})

module.exports = { address }