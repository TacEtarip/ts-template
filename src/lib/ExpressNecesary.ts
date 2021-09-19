import {Application} from 'express';
import {Server} from 'http';

/**
 * Interface necesaria para crear una app express
 *
 * @interface IExpressNecesary
 * @template T
 */
 export interface IExpressNecesaryFunctions {
    agregarConfiguracionBasica() : void;
    agregarDocumentacion() : void;
    agregarRutas() : void;
    crearServidor(port: number): void;
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
