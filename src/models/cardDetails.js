/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardDetails', {
    cardId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'accountDetails',
        key: 'accountId'
      }
    },
    pin: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateIssued: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    balance: {
      type: "DOUBLE",
      allowNull: false
    },
    onLoan: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    expireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tempory: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'cardDetails'
  });
};
