import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../documentation/swaggerDocument.json';
import morgan from 'morgan';
import cors from 'cors';
import {crearRutaExample} from './routes/exampleRoute';
import { IExpressNecesaryFunctions, IExpressNecesaryParams } from '../lib/ExpressNecesary';
import http from 'http';

/**
 *
 *
 * @class ExpressAPP
 * Clase para crear y manejar la aplicación de express
 */
class ExpressAPP implements IExpressNecesaryFunctions, IExpressNecesaryParams {
    app: express.Application;
    server: http.Server;
    /**
     *Creates an instance of ExpressAPP.
     * @memberof ExpressAPP
     */
    constructor(port: number) {
        this.app = express();
        this.agregarConfiguracionBasica();
        this.agregarRutas();
        this.agregarDocumentacion();
        this.crearServidor(port)
    }

    /**
     * Agrega la configuración basica necesaria para el optimo y correcto funcionamiento de la app
     *
     * @memberof ExpressAPP
     */
    agregarConfiguracionBasica() {
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
    agregarDocumentacion() {
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
    agregarRutas() {
        const rutaExample = crearRutaExample();
        this.app.use(rutaExample.ruta, rutaExample.router);
    }

    /**
     * Crear el servidor dado un port, usa el module http
     *
     * @param {number} port
     * @returns
     * @memberof ExpressAPP
     */
    crearServidor(port: number) {
        this.server = http.createServer(this.app);
        this.server.listen(port);
    }
}

export default ExpressAPP;