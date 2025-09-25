const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shopcarts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    productdetailsizeId: {
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
    statusId: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shopcarts',
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
        name: "idx_cart_pds",
        using: "BTREE",
        fields: [
          { name: "productdetailsizeId" },
        ]
      },
      {
        name: "idx_cart_user",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "idx_cart_status",
        using: "BTREE",
        fields: [
          { name: "statusId" },
        ]
      },
    ]
  });
};
