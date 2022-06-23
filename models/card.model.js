// database
const { db } = require('./utils/databases');

// utils
const { DataTypes } = require('sequelize');

const card = db.define('cards', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allwNull: false,
    },
    number: {
        type: DataTypes.INTEGER(19),
        allowNull: false,
    },
    nip: {
        type: DataTypes.INTEGER(3),
        allowNull: true,
    },
    validity: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    bank: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    kind: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    visa: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{
    freezeTableName: true,
})

module.exports = { tarjeta };
