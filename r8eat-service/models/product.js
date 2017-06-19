'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://104.46.40.104:3389');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String
  },
  description:{
    type: String
  },
  imageUrl: {
      type: String
  },
  likes: {
      type: Number
  },
  dislikes: {
      type: Number
  },
  product_type: {
    type: [{
      type: String,
      enum: ['main', 'side', 'salad']
    }]
  }
});

mongoose.model('productTest', productSchema);

function getProductById(id) {
    mongoose.model('productTest').findOne({ _id: id});
}

module.exports = {
  getProductById: getProductById
};