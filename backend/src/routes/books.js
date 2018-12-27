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
router.route('/livros')
    .post((req, res, next) => {
        let livro = new Livro();
        livro.name = req.name;
        livro.author = req.author;
        livro.category = req.category;
        livro.qtdPages = req.qtdPages;
        livro.status = req.status;
        livro.price = req.price;
        livro.thumbnail = req.thumbnail;

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

/**
 * @description Endpoint to get book by id.
 *
 */
router.route('/livros/:livro_id')

    // get the book by id.
    .get((req, res) => {
        console.log('get by id');
        Livro.findById(req.params.livro_id, (error, livro) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + error });
            }
            console.log('get by id: ', livros.length);

            res.send(livro);
        });
    })

    // update the book by id
    .put((req, res) => {
        console.log('put by id');
        Livro.findById(req.params.livro_id, (error, livro) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + error });
            }

            livro.name = req.body.name;
            livro.author = req.body.author;
            livro.category = req.body.category;
            livro.qtdPages = req.body.qtdPages;
            livro.status = req.body.status;
            livro.price = req.body.price;
            livro.thumbnail = req.body.thumbnail;

            livro.save((error) => {

                if (error) {
                    res.status(400).json({ message: 'Error!' + error });
                }

                res.send({ message: 'Book updated!' });
            });
        });
    })

    // delete the book by id
    .delete((req, res) => {
        console.log('delete by id');
        Livro.remove({ _id: req.params.livro_id }, (error, livro) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + error });
            }

            console.log('delete by id: ', livros.length);

            res.send({ message: 'Successfully deleted!' });
        });
    })

module.exports = router;
