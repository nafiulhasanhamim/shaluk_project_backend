const userrouter = require("express").Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { getAllProducts, individualProduct, medicineProducts, foodProducts, orderByAParticularCustomer,
     specificShopProducts, 
     placeOrder} = require("../../controllers/user_controllers/usercontroller");
  
userrouter.use(passport.initialize());
// register route
userrouter.get("/get-all-products",getAllProducts);
userrouter.post("/individual-product",individualProduct);
userrouter.post("/products-by-a-specific-shop",specificShopProducts)
userrouter.get("/medicine-products",medicineProducts);
userrouter.get("/food-products",foodProducts);
userrouter.post("/place-order",placeOrder);
userrouter.post("/order-by-a-particular-user",orderByAParticularCustomer);


module.exports = userrouter;