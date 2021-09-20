/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

/**
 *  Metodos express
 * @enum {number}
 */
 export enum Metodos {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
}

/**
 * Metodos y parametros necesarios para crear una ruta
 *
 * @export
 * @abstract
 * @class RouteNecessary
 */
export default abstract class RouteNecessary {
    protected abstract _router: Router;
    protected abstract _ruta: string;
    abstract get ruta() : string;
    abstract get router() : Router;
}

/**
 * Para almacenar las rutas y sus metodos creados
 */
export interface IRutaDoc {
    ruta: string;
    metodo: Metodos;
}