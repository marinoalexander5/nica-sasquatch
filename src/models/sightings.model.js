const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sightings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    latitude: {
      type: DataTypes.FLOAT(10,6), 
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT(10,6), 
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