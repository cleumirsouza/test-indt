
/**
 * Author: Cleumir Souza
 * Date: 28/12/2018
 * @description Starting application in development mode.
 */
if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
}
