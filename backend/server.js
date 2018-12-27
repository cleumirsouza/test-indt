/**
 * Author: Cleumir Souza
 * Description: File to keep the start of application
 * Date: 26/12/18
 */

 // Imports
 const config = require('./src/config');
 const db = require('./src/database');
 const app = require('./src/app');
 const signals = require('./src/signals');

 // Connect mogo database.
 db.connect();

 // Start API to listen port defined in the config
 const server = app.listen(config.port, () => {
    console.info(`Listening on *:${config.port}`);
 });

 // Callback called when receive a event from node process.
 const shutdown = signals.init(async () => {
    await db.close();
    await server.close();
 });

 /**
 * 'SIGINT' from the terminal is supported on all platforms, and can usually be generated with <Ctrl>+C;
 * 'SIGTERM' is not supported on Windows, it can be listened on.
 */
 process.on('SIGINT', shutdown);
 process.on('SIGTERM', shutdown);
