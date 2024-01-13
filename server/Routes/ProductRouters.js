const Route= require('express').Router();
const {createProduct} =require("../Controllers/ProductController")


Route.post('/createProduct',createProduct)

module.exports=Route;