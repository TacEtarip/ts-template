import throng from 'throng';
import { getConfig } from './config/config';
import { nuevaApp } from './server/crearApp';

const WORKERS = (process.env.WEB_CONCURRENCY || 1) as number;

const configENV = getConfig(process.env.NODE_ENV);

const PORT = parseInt(process.env.PORT) || 2000;

const start = (id: number) => {
    configENV.log().info(`Id Worker ${id}`);
    const serverApp = nuevaApp(PORT);
    const server = serverApp.server;

    server.on('listening', () => {
        configENV.log().info('http://localhost:' + PORT);
    });
  
    server.on('close', () => {
        configENV.log().info('Servidor cerrado');
    }) 
};

throng({ worker: start, count: WORKERS });