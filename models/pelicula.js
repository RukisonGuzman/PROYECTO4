'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelicula.init({
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    adultos: DataTypes.BOOLEAN,
    popularidad: DataTypes.FLOAT,
    imagen: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};