const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderproducts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addressUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'addressusers',
        key: 'id'
      }
    },
    shipperId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    statusId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    },
    typeShipId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'typeships',
        key: 'id'
      }
    },
    voucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vouchers',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isPaymentOnlien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orderproducts',
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
        name: "idx_op_address",
        using: "BTREE",
        fields: [
          { name: "addressUserId" },
        ]
      },
      {
        name: "idx_op_shipper",
        using: "BTREE",
        fields: [
          { name: "shipperId" },
        ]
      },
      {
        name: "idx_op_status",
        using: "BTREE",
        fields: [
          { name: "statusId" },
        ]
      },
      {
        name: "idx_op_typeship",
        using: "BTREE",
        fields: [
          { name: "typeShipId" },
        ]
      },
      {
        name: "idx_op_voucher",
        using: "BTREE",
        fields: [
          { name: "voucherId" },
        ]
      },
    ]
  });
};
