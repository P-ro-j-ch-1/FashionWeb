const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productdetailsizes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productdetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productdetails',
        key: 'id'
      }
    },
    width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    height: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sizeId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'productdetailsizes',
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
        name: "idx_pdsize_detail",
        using: "BTREE",
        fields: [
          { name: "productdetailId" },
        ]
      },
      {
        name: "idx_pdsize_size",
        using: "BTREE",
        fields: [
          { name: "sizeId" },
        ]
      },
    ]
  });
};
