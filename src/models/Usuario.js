const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
},  { tableName: 'usuarios', timestamps: false});

module.exports = Usuario;