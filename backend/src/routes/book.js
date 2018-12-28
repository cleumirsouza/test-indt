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
 * @description Endpoint to get book by id.
 *
 */
router.route('/livro/:_id')
    .get((req, res) => {
        console.log('get by id', req.params._id);
        Livro.findById(req.params._id, (error, livro) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + error });
            }
            console.log('get by id: ', livro);

            res.send(livro);
        });
    })
    .put((req, res) => {
        console.log('put by id');
        Livro.findById(req.params._id, (error, livro) => {
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

    .delete((req, res) => {
        console.log('delete by id');
        Livro.remove({ _id: req.params._id }, (error, livro) => {
            if (error) {
                res.status(400).json({ message: 'Error!' + error });
            }

            console.log('delete by id: ', livro.length);

            res.send({ message: 'Successfully deleted!' });
        });
    });

module.exports = router;
