import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../documentation/swaggerDocument.json';
import morgan from 'morgan';
import cors from 'cors';
import { IExpressNecesaryFunctions, IExpressNecesaryParams } from '../lib/util/ExpressNecesary';
import http from 'http';
import Route from '../lib/Route';

/**
 *
 *
 * @class ExpressAPP
 * Clase para crear y manejar la aplicación de express
 */
class ExpressAPP implements IExpressNecesaryFunctions, IExpressNecesaryParams {
    app: express.Application;
    server: http.Server;
    port: number;
    rutas: string[] = ['/api-docs'];
    /**
     *Creates an instance of ExpressAPP.
     * @memberof ExpressAPP
     */
    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.agregarConfiguracionBasica();
        this.agregarDocumentacion();
    }

    /**
     * Agrega la configuración basica necesaria para el optimo y correcto funcionamiento de la app
     *
     * @memberof ExpressAPP
     */
    agregarConfiguracionBasica(): void {
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(morgan(':method :url'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    
    /**
     * Usando Swagger agrega la documentation base
     * Es importante tener '../documentation/swaggerDocument'
     * 
     * @memberof ExpressAPP
     */
    agregarDocumentacion(): void {
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
        // * Redirije / a la documentacion
        this.app.get('/', (req, res) => {
          res.redirect('/api-docs');
        });
    }

    /**
     * En esta funcion agrega las rutas
     *
     * @memberof ExpressAPP
     */
    agregarRuta(route: Route): void {
        this.rutas.push(route.ruta);
        this.app.use(route.ruta, route.router);
    }

    /**
     * Crear el servidor dado un port, usa el module http
     *
     * @param {number} port
     * @returns http.Server
     * @memberof ExpressAPP
     */
    crearServidor(): http.Server {
        this.server = http.createServer(this.app);
        this.server.listen(this.port);
        return this.server;
    }
}

export default ExpressAPP;