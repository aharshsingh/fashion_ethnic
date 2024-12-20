const adminRegisterController = require('./auth/adminRegisterController')
const loginController = require('./auth/loginController');
const registerController = require('./auth/registerController');
const productController = require('./productController');
const userController = require('./userController');
const wishListController = require('./wishListController');

module.exports = { adminRegisterController, loginController, registerController, productController, userController, wishListController }