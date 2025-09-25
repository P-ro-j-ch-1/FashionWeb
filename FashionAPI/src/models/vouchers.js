const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vouchers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fromDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    typeVoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'typevouchers',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codeVoucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vouchers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_vouchers_type",
        using: "BTREE",
        fields: [
          { name: "typeVoucherId" },
        ]
      },
    ]
  });
};
