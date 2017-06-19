'use strict';
var express = require('express');
var router = express.Router();
var productsAdapter = require('../models/product.js'); 

/* GET products listing. */
router.get('/:id', function (req, res) {
    res.send(productsAdapter.getProductById(req.params.id));
});

module.exports = router;
