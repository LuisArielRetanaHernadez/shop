// utils
const { db } = require('./utils/databases');

// sequelize
const { DataTypes } = require('sequelize');

const cardUser = db.define('cardsUsers', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    idCard: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    }
},{
    freezeTableName: true,
})

module.exports = { cardUser };