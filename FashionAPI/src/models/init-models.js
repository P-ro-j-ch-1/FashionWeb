var DataTypes = require("sequelize").DataTypes;
var _addressusers = require("./addressusers");
var _allcodes = require("./allcodes");
var _banners = require("./banners");
var _blogs = require("./blogs");
var _comments = require("./comments");
var _messages = require("./messages");
var _orderdetails = require("./orderdetails");
var _orderproducts = require("./orderproducts");
var _productdetails = require("./productdetails");
var _productdetailsizes = require("./productdetailsizes");
var _productimages = require("./productimages");
var _products = require("./products");
var _receiptdetails = require("./receiptdetails");
var _receipts = require("./receipts");
var _roommessages = require("./roommessages");
var _shopcarts = require("./shopcarts");
var _suppliers = require("./suppliers");
var _typeships = require("./typeships");
var _typevouchers = require("./typevouchers");
var _users = require("./users");
var _vouchers = require("./vouchers");
var _voucheruseds = require("./voucheruseds");

function initModels(sequelize) {
  var addressusers = _addressusers(sequelize, DataTypes);
  var allcodes = _allcodes(sequelize, DataTypes);
  var banners = _banners(sequelize, DataTypes);
  var blogs = _blogs(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var orderproducts = _orderproducts(sequelize, DataTypes);
  var productdetails = _productdetails(sequelize, DataTypes);
  var productdetailsizes = _productdetailsizes(sequelize, DataTypes);
  var productimages = _productimages(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var receiptdetails = _receiptdetails(sequelize, DataTypes);
  var receipts = _receipts(sequelize, DataTypes);
  var roommessages = _roommessages(sequelize, DataTypes);
  var shopcarts = _shopcarts(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var typeships = _typeships(sequelize, DataTypes);
  var typevouchers = _typevouchers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vouchers = _vouchers(sequelize, DataTypes);
  var voucheruseds = _voucheruseds(sequelize, DataTypes);

  orderproducts.belongsTo(addressusers, { as: "addressUser", foreignKey: "addressUserId"});
  addressusers.hasMany(orderproducts, { as: "orderproducts", foreignKey: "addressUserId"});
  banners.belongsTo(allcodes, { as: "status", foreignKey: "statusId"});
  allcodes.hasMany(banners, { as: "banners", foreignKey: "statusId"});
  blogs.belongsTo(allcodes, { as: "subject", foreignKey: "subjectId"});
  allcodes.hasMany(blogs, { as: "blogs", foreignKey: "subjectId"});
  blogs.belongsTo(allcodes, { as: "status", foreignKey: "statusId"});
  allcodes.hasMany(blogs, { as: "status_blogs", foreignKey: "statusId"});
  orderproducts.belongsTo(allcodes, { as: "status", foreignKey: "statusId"});
  allcodes.hasMany(orderproducts, { as: "orderproducts", foreignKey: "statusId"});
  productdetailsizes.belongsTo(allcodes, { as: "size", foreignKey: "sizeId"});
  allcodes.hasMany(productdetailsizes, { as: "productdetailsizes", foreignKey: "sizeId"});
  products.belongsTo(allcodes, { as: "status", foreignKey: "statusId"});
  allcodes.hasMany(products, { as: "products", foreignKey: "statusId"});
  products.belongsTo(allcodes, { as: "category", foreignKey: "categoryId"});
  allcodes.hasMany(products, { as: "category_products", foreignKey: "categoryId"});
  products.belongsTo(allcodes, { as: "brand", foreignKey: "brandId"});
  allcodes.hasMany(products, { as: "brand_products", foreignKey: "brandId"});
  users.belongsTo(allcodes, { as: "gender", foreignKey: "genderId"});
  allcodes.hasMany(users, { as: "users", foreignKey: "genderId"});
  users.belongsTo(allcodes, { as: "role", foreignKey: "roleId"});
  allcodes.hasMany(users, { as: "role_users", foreignKey: "roleId"});
  users.belongsTo(allcodes, { as: "status", foreignKey: "statusId"});
  allcodes.hasMany(users, { as: "status_users", foreignKey: "statusId"});
  comments.belongsTo(blogs, { as: "blog", foreignKey: "blogId"});
  blogs.hasMany(comments, { as: "comments", foreignKey: "blogId"});
  comments.belongsTo(comments, { as: "parent", foreignKey: "parentId"});
  comments.hasMany(comments, { as: "comments", foreignKey: "parentId"});
  orderdetails.belongsTo(orderproducts, { as: "order", foreignKey: "orderId"});
  orderproducts.hasMany(orderdetails, { as: "orderdetails", foreignKey: "orderId"});
  productdetailsizes.belongsTo(productdetails, { as: "productdetail", foreignKey: "productdetailId"});
  productdetails.hasMany(productdetailsizes, { as: "productdetailsizes", foreignKey: "productdetailId"});
  productimages.belongsTo(productdetails, { as: "productdetail", foreignKey: "productdetailId"});
  productdetails.hasMany(productimages, { as: "productimages", foreignKey: "productdetailId"});
  orderdetails.belongsTo(productdetailsizes, { as: "product", foreignKey: "productId"});
  productdetailsizes.hasMany(orderdetails, { as: "orderdetails", foreignKey: "productId"});
  receiptdetails.belongsTo(productdetailsizes, { as: "productDetailSize", foreignKey: "productDetailSizeId"});
  productdetailsizes.hasMany(receiptdetails, { as: "receiptdetails", foreignKey: "productDetailSizeId"});
  shopcarts.belongsTo(productdetailsizes, { as: "productdetailsize", foreignKey: "productdetailsizeId"});
  productdetailsizes.hasMany(shopcarts, { as: "shopcarts", foreignKey: "productdetailsizeId"});
  comments.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(comments, { as: "comments", foreignKey: "productId"});
  productdetails.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(productdetails, { as: "productdetails", foreignKey: "productId"});
  receiptdetails.belongsTo(receipts, { as: "receipt", foreignKey: "receiptId"});
  receipts.hasMany(receiptdetails, { as: "receiptdetails", foreignKey: "receiptId"});
  messages.belongsTo(roommessages, { as: "room", foreignKey: "roomId"});
  roommessages.hasMany(messages, { as: "messages", foreignKey: "roomId"});
  receipts.belongsTo(suppliers, { as: "supplier", foreignKey: "supplierId"});
  suppliers.hasMany(receipts, { as: "receipts", foreignKey: "supplierId"});
  orderproducts.belongsTo(typeships, { as: "typeShip", foreignKey: "typeShipId"});
  typeships.hasMany(orderproducts, { as: "orderproducts", foreignKey: "typeShipId"});
  vouchers.belongsTo(typevouchers, { as: "typeVoucher", foreignKey: "typeVoucherId"});
  typevouchers.hasMany(vouchers, { as: "vouchers", foreignKey: "typeVoucherId"});
  addressusers.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(addressusers, { as: "addressusers", foreignKey: "userId"});
  blogs.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(blogs, { as: "blogs", foreignKey: "userId"});
  comments.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(comments, { as: "comments", foreignKey: "userId"});
  messages.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(messages, { as: "messages", foreignKey: "userId"});
  orderproducts.belongsTo(users, { as: "shipper", foreignKey: "shipperId"});
  users.hasMany(orderproducts, { as: "orderproducts", foreignKey: "shipperId"});
  receipts.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(receipts, { as: "receipts", foreignKey: "userId"});
  roommessages.belongsTo(users, { as: "userOne_user", foreignKey: "userOne"});
  users.hasMany(roommessages, { as: "roommessages", foreignKey: "userOne"});
  roommessages.belongsTo(users, { as: "userTwo_user", foreignKey: "userTwo"});
  users.hasMany(roommessages, { as: "userTwo_roommessages", foreignKey: "userTwo"});
  shopcarts.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(shopcarts, { as: "shopcarts", foreignKey: "userId"});
  voucheruseds.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(voucheruseds, { as: "voucheruseds", foreignKey: "userId"});
  orderproducts.belongsTo(vouchers, { as: "voucher", foreignKey: "voucherId"});
  vouchers.hasMany(orderproducts, { as: "orderproducts", foreignKey: "voucherId"});
  voucheruseds.belongsTo(vouchers, { as: "voucher", foreignKey: "voucherId"});
  vouchers.hasMany(voucheruseds, { as: "voucheruseds", foreignKey: "voucherId"});

  return {
    addressusers,
    allcodes,
    banners,
    blogs,
    comments,
    messages,
    orderdetails,
    orderproducts,
    productdetails,
    productdetailsizes,
    productimages,
    products,
    receiptdetails,
    receipts,
    roommessages,
    shopcarts,
    suppliers,
    typeships,
    typevouchers,
    users,
    vouchers,
    voucheruseds,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
