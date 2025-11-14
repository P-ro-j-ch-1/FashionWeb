'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {

        static associate(models) {
            Product.belongsTo(models.allcode, { foreignKey: 'categoryId', targetKey: 'code', as: 'categoryData' })
            Product.belongsTo(models.allcode, { foreignKey: 'brandId', targetKey: 'code', as: 'brandData' })
            Product.belongsTo(models.allcode, { foreignKey: 'statusId', targetKey: 'code', as: 'statusData' })
            Product.hasMany(models.productdetail, { foreignKey: 'productId', as: 'productDetailData' })
        }
    };
    Product.init({
        name: DataTypes.STRING,
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        statusId: DataTypes.STRING,
        categoryId: DataTypes.STRING,
        view: DataTypes.INTEGER,

        madeby: DataTypes.STRING,
        material: DataTypes.STRING,
        brandId: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'product',
    });
    return Product;
};
