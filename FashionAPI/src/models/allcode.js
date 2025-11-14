'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Allcode.hasMany(models.user, { foreignKey: 'genderId', as: 'genderData' })
            Allcode.hasMany(models.user, { foreignKey: 'roleId', as: 'roleData' })
            Allcode.hasMany(models.product, { foreignKey: 'categoryId', as: 'categoryData' })
            Allcode.hasMany(models.product, { foreignKey: 'brandId', as: 'brandData' })
            Allcode.hasMany(models.product, { foreignKey: 'statusId', as: 'statusData' })
            Allcode.hasMany(models.blog, { foreignKey: 'subjectId', as: 'subjectData' })
            Allcode.hasMany(models.typevoucher, { foreignKey: 'typeVoucher', as: 'typeVoucherData' })
            Allcode.hasMany(models.productdetailsize, { foreignKey: 'sizeId', as: 'sizeData' })
            Allcode.hasMany(models.orderproduct, { foreignKey: 'statusId', as: 'statusOrderData' })

        }
    };
    Allcode.init({
        type: DataTypes.STRING,
        value: DataTypes.STRING,
        code: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'allcode',
    });
    return Allcode;
};
