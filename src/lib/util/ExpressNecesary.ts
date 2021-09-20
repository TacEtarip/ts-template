import {Application} from 'express';
import {Server} from 'http';
import Route from '../Route';

/**
 * Interface necesaria para crear una app express
 *
 * @interface IExpressNecesary
 * @template T
 */
 export interface IExpressNecesaryFunctions {
    agregarConfiguracionBasica() : void;
    agregarDocumentacion() : void;
    agregarRuta(route: Route) : void;
    crearServidor(port: number): Server;
}

/**
 *
 * @export
 * @interface IExpressNecesaryParams
 */
export interface IExpressNecesaryParams {
    app: Application;
    server: Server;
}
