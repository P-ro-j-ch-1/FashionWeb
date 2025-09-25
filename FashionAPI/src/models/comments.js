const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comments',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'blogs',
        key: 'id'
      }
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comments',
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
        name: "idx_comments_blog",
        using: "BTREE",
        fields: [
          { name: "blogId" },
        ]
      },
      {
        name: "idx_comments_parent",
        using: "BTREE",
        fields: [
          { name: "parentId" },
        ]
      },
      {
        name: "idx_comments_product",
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
      {
        name: "idx_comments_user",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
