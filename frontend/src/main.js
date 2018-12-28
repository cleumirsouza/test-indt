
/**
 * Author: Cleumir Souza
 * Date: 08/08/2018
 * @description Starting application in development mode.
 */
if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
}
