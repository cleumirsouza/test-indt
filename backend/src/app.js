/**
 * Author: Cleumir Souza
 * Description: File that contain all information about the config, error handle and outrs from endpoints.
 * Date: 27/12/2018
 */

// Imports
const express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    books = require('./routes/books'),
    app = express(),
    cors = require('cors');

// setup body parser and use cookie parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Set cors
app.use(cors());

// add routes
app.use('/api', books);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
