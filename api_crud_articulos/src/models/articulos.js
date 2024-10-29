'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulos extends Model {
    static associate(models) {
    }
  }
   Articulos.init({
    nombre: DataTypes.STRING,
    fecha_modificacion: DataTypes.DATE,
    marca: DataTypes.STRING,
    estado_activacion: {
      type: DataTypes.BOOLEAN,
      field: 'estado_activacion'
    }
  }, {
    sequelize,
    modelName: 'Articulos',
  });
  return Articulos;
};
