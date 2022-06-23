// databases
const { db } = require('./utils/databases');

// Sequelize
const { DataTypes} = require('sequelize');

const User = db.define('users', { 
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    firstName: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    surname: {
        type: DataTypes.STRING(55),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(88),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(88),
        allowNull: false,
    },
    photoPer: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    rol: {
        type: DataTypes.STRING(25),
        defaultValue: 'cliente',
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(10),
        defaultValue: 'enabled',
        allowNull: false,
    }
},{
    freezeTableName: true,
})

module.exports = { User };