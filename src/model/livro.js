/**
 * Author: Cleumir Souza
 * Description: File that contain produto model.
 * Date: 26/12/2018
 */

// Mongoose is a Object Document Mapper to provides a straight-forward, schema-based solution to model of the application data.
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Define Livro schema with attributes
 */
const LivroSchema = new Schema({
    id: String,
    name: String,
    author: String,
    category: String,
    qtdPages: String,
    status: String,
    price: String,
    thumbnail: String
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;
