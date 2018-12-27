/**
 * Author: Cleumir Souza
 * Description: File to handle request to /livro endpoint.
 * Date: 27/12/2018
 */

 // Imports
 const express = require('express');
 const Livro = require('../model/livro');
 const router = express.Router();

 /**
  * @description Endpoint to Post and Get all products
  */
 router.route('/products')
  .get((req, res, next) => {
      // Get all products in the database.
      Product.find((error, products) => {
          if(error) {
              res.status(400).json({message: 'Error!' + err});
          }
          res.send(products);
      });
 });

 /**
  * @description Endpoint to get product by id.
  * 
  */
 router.route('/product/:product_id')
    .get((req, res) => {
        // Find livro by livro_id
        Livro.findById(req.params.product_id, (error, livro) => {
            if(error) {
                res.status(400).json({message: 'Error!' + error});
            }        
            res.send(livro);
        });
 });

 module.exports = router;
