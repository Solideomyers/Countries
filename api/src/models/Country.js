const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.INTEGER
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false
  });
};
//The characters special return error in the SQL SHELL, but we can use 
//SET client_encoding TO "UTF8";