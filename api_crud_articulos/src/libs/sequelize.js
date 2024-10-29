const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const ArticulosModel = require('./../models/articulos');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
  define: {
    timestamps: false,
  },
});

// Inicializador
const models = {
  Articulos: ArticulosModel(sequelize, Sequelize.DataTypes),
};
module.exports = { sequelize, models };
