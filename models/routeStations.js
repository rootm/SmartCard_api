/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('routeStations', {
    routeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'busRoutes',
        key: 'routeid'
      }
    },
    stationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stations',
        key: 'stationid'
      }
    },
    routeOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'routeStations'
  });
};
