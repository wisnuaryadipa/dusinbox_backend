import express from 'express';
import config from './config';
import Logger from './loaders/logger'
// rest of the code remains same

function startServer() {
    const app = express();

    app.get('/', (req, res) => res.send('Express + TypeScript Server'));
    app.listen(config.port, () => {
        Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ################################################
        `);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    })

}

startServer();