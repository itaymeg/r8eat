'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://104.46.40.104:27017', 
                {user: 'r8eat', pwd:'R8eat!@#$%^&'});
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
    return mongoose.model('productTest').findOne({ 'id': parseFloat(id)});
}

module.exports = {
  getProductById: getProductById
};