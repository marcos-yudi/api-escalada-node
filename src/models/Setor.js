//Tabela de Setores

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Setor = sequelize.define('Setor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.STRING }
}, { tableName: 'setores', timestamps: false});

module.exports = Setor;