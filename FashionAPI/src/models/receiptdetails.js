const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receiptdetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    receiptId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'receipts',
        key: 'id'
      }
    },
    productDetailSizeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productdetailsizes',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receiptdetails',
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
        name: "idx_rdetail_pds",
        using: "BTREE",
        fields: [
          { name: "productDetailSizeId" },
        ]
      },
      {
        name: "idx_rdetail_receipt",
        using: "BTREE",
        fields: [
          { name: "receiptId" },
        ]
      },
    ]
  });
};
