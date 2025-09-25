const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productimages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    caption: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productdetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productdetails',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productimages',
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
        name: "idx_pimg_detail",
        using: "BTREE",
        fields: [
          { name: "productdetailId" },
        ]
      },
    ]
  });
};
