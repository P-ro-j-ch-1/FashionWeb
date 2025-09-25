const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contentHTML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentMarkdown: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    statusId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    },
    categoryId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    madeby: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brandId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
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
        name: "idx_products_brand",
        using: "BTREE",
        fields: [
          { name: "brandId" },
        ]
      },
      {
        name: "idx_products_category",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "idx_products_status",
        using: "BTREE",
        fields: [
          { name: "statusId" },
        ]
      },
    ]
  });
};
