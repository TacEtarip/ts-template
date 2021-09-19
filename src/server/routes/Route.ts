import { Router } from 'express';
/**
 * Usa r.router para adquirir el router y r.ruta para adquirir la ruta
 *  
 * @class Route
 */
class Route {
    protected _router: Router;
    protected _ruta: string;

    constructor(ruta: string, router: Router) {
        this._router = router;
        this._ruta = ruta[0] === '/' ? ruta : '/' + ruta;
    }
    
    /**
     * Adquiere la ruta con el formato /ruta
     *
     * @readonly
     * @type {string}
     * @memberof Route
     */
    public get ruta() : string {
        return this._ruta;
    }

    /**
     * Adquiere el router de tipo express.Router
     *
     * @readonly
     * @type {Router}
     * @memberof Route
     */
    public get router() : Router {
        return this._router;
    }
}

export default Route;