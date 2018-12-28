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
 * @description Endpoint to Post and Get all books
 */
router.route('/livros/')
    .post((req, res, next) => {
        let livro = new Livro();
        console.log(req.body.name);
        livro.name = req.body.name;
        livro.author = req.body.author;
        livro.category = req.body.category;
        livro.qtdPages = req.body.qtdPages;
        livro.status = req.body.status;
        livro.price = req.body.price;
        livro.thumbnail = req.body.thumbnail;

        livro.save((error) => {
            if (error) {
                res.send(error);
            }
            res.send({message: 'Book created!'})
        });
    })

    .get((req, res, next) => {
        // Get all books in the database.
        Livro.find((error, livros) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + err });
            }
            console.log('get all: ', livros.length);

            res.send(livros);
        });
    });

module.exports = router;
