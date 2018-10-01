/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerJourney', {
    journeyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'accountDetails',
        key: 'accountid'
      }
    },
    routeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'busDetails',
        key: 'routeid'
      }
    },
    startStation: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    endStation: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cost: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'customerJourney'
  });
};
