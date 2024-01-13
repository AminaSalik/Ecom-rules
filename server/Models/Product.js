
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const ProductSchema =new Schema({
    Name_: {
        type: String,
        required: true,
    }  
 });

const Product = mongoose.model('product',ProductSchema)
 
module.exports= Product