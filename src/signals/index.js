/**
 * Author: Cleumir Souza
 * Description: File to handle API process.
 * Date: 26/12/2018
 */

const process = require('process');

/**
 * Function that contain scope from callback to close server and db process by signal received.
 */
const init = closeFunc => async () => {
    try {
       await closeFunc();
        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
};

module.exports = { init };
