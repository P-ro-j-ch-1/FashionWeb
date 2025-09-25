const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    genderId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'allcodes',
        key: 'code'
      }
    },
    phonenumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roleId: {
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
    isActiveEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    usertoken: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "idx_users_gender",
        using: "BTREE",
        fields: [
          { name: "genderId" },
        ]
      },
      {
        name: "idx_users_role",
        using: "BTREE",
        fields: [
          { name: "roleId" },
        ]
      },
      {
        name: "idx_users_status",
        using: "BTREE",
        fields: [
          { name: "statusId" },
        ]
      },
    ]
  });
};
