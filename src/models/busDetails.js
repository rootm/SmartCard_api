/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('busDetails', {
    busId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
        autoIncrement: true,
      primaryKey: true
    },
    busNo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    routeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'busRoutes',
        key: 'routeid'
      }
    }
  }, {
    tableName: 'busDetails'
  });
};
