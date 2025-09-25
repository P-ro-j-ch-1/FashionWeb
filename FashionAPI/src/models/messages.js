const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
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
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roommessages',
        key: 'id'
      }
    },
    unRead: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'messages',
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
        name: "idx_msg_room",
        using: "BTREE",
        fields: [
          { name: "roomId" },
        ]
      },
      {
        name: "idx_msg_user",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
