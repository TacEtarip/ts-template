/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import RouteNecessary from './util/RouteNecessary';

/**
 * Usa r.router para adquirir el router y r.ruta para adquirir la ruta
 * @class Route
 */
class Route extends RouteNecessary {
    protected _router: Router;
    protected _ruta: string;

    constructor(ruta: string) {
        super();
        this._router = Router();
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

    /*
    get(ruta: string, 
        middleware: (req: Request, res: Response, next?: NextFunction) => any,
        ...middlewares: ((req: Request, res: Response, next?: NextFunction) => any)[]): void {
            this.rutas.push({ruta, metodo: Metodos.GET});
            this.router.get(ruta, middleware, ...middlewares)
    }

    post(ruta: string, 
        middleware: (req: Request, res: Response, next?: NextFunction) => any,
        ...middlewares: ((req: Request, res: Response, next?: NextFunction) => any)[]): void {
            if (this.) {
                
            }
            this.rutas.push({ruta, metodo: Metodos.POST});
            this.router.get(ruta, middleware, ...middlewares)
    }*/
    
}


export default Route;