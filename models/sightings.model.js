const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sightings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location: {
      // type: DataTypes.GEOMETRY('POINT'),
      type: DataTypes.FLOAT, 
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    tableName: 'Sightings',
  });
};