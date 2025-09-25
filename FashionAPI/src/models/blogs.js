const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shortdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subjectId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
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
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    contentMarkdown: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentHTML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'blogs',
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
        name: "idx_blogs_status",
        using: "BTREE",
        fields: [
          { name: "statusId" },
        ]
      },
      {
        name: "idx_blogs_subject",
        using: "BTREE",
        fields: [
          { name: "subjectId" },
        ]
      },
      {
        name: "idx_blogs_user",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
