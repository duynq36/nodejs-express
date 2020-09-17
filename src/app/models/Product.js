const { Module } = require('module');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, maxlength: 255 },
    description: {type: String, maxlength: 600},
    price: { type: String, maxlength:255 },
    promotional_price: { type: String, maxlength: 255},
    status: {type: String, default: 0},
  
});

module.exports = mongoose.model('Product', Product);