/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('busRoutes', {
    routeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    routeName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    priceKm: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'busRoutes'
  });
};
