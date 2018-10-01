/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stations', {
    stationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    stationName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'stations'
  });
};
