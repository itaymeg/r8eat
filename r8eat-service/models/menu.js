'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://r8eat-db:oMZVtYoBY3WIydzO0I7IpszBr0zPVeLCH6zff3FysdI8mhwpj6d1go612Y0R3ieZYP1z9IN8RFpkutAui0QXYQ==@r8eat-db.documents.azure.com:10255/r8eat-db?ssl=true&replicaSet=globaldb');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
  _id: {
    type: String
  },
  productIds: {
    type: Array
  }
});

mongoose.model('menues', menuSchema);

function getMenuById(id) {
    return mongoose.model('menues').findOne({ '_id': id });
}

module.exports = {
  getMenuById: getMenuById
};