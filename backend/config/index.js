/**
 * Author: Cleumir Souza
 * Description: File that contain generic config to application.
 * Date: 26/12/2018
 */

/**
 * This module is used to collect all the configuration in one place.
 */
const config = {
    connectionString: process.env.DATABASE_CONNECTION_STRING,
    port: process.env.port || 8000,
    mongodbString: 'mongodb://linxdb:linx123@ds213832.mlab.com:13832/linx-test',
};

module.exports = config;
