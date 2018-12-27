/**
 * Author: Cleumir Souza
 * Description: File that contain setup to create a new connection with database hosted by mLab.
 * Date: 26/12/2018
 */

 // Imports
 const { mongodbString } = require('../config');
 const mongoose = require('mongoose');
 const blueBird = require('bluebird');

 // Set mongoose Promise to Bluebird
 mongoose.Promise = blueBird;

 // Retry connection
 const connectWithRetry = () => {
    return mongoose.connect(mongodbString, { useNewUrlParser: true });
 }

 // Exit application on error
 mongoose.connection.on('error', err => {
    console.info(`MongoDB connection error: ${err}`);
    setTimeout(connectWithRetry, 5000);
 });

 // Method fired when mongodb get connected status.
 mongoose.connection.on('connected', () => {
    console.info('MongoDB is connected');
 })

 if (process.env === 'development') {
    mongoose.set('debug', true);
 }

 
 // Method to start database connecton.
 const connect = () => {
    connectWithRetry()
 }

module.exports = { connect: connect };
