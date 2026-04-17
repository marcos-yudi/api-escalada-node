const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Setor = require('./Setor');

const Rota = sequelize.define('Rota', {
    id: { type: DataTypes.UUID, defaultValues: DataTypes.UUIDV4, primaryKey: true},
    nome: { type: DataTypes.STRING, allowNull: false },
    grau: { type: DataTypes.STRING, allowNull: false },
    corAgarras: { type: DataTypes.STRING, allowNull: false },
    routeSetter: { type: DataTypes.STRING, allowNull: false }
}, {tableName: 'rotas', timestamps: false});

//Cria o JOIN: Um setor tem várias rotas
Setor.hasMany(Rota, { foreignKey: 'setorId' });
Rota.belongsTo(Setor, { foreignKey: 'setorId' });

module.exports = Rota;