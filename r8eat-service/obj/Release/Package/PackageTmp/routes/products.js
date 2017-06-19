'use strict';
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var productsAdapter = require('../models/product.js'); 

/* GET products listing. */

// router.get('/', (req, res) => {
//     mongoose.model('productTest').find({ })
//         .then(products => {
//             console.log(products);
//             res.send(products);
//         })
//         .catch(err => res.status(500).send(err));
// });

router.get('/:id', function (req, res) {
    productsAdapter.getProductById(req.params.id)
        .then(product => {
            console.log(product);
            res.send(product);
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;
