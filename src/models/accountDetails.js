/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountDetails', {
    accountId: {
      type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    identificationNo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    local: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'accountDetails'
  });
};
