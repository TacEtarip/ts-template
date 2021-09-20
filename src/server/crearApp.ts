import ExpressAPP from './ExpressAPP';
import { crearRutaExample } from './routes/exampleRoute';
/**
 * Crea una nueva aplicacion usando ExpressAPP
 * @param port 
 * @returns 
 */
export const nuevaApp = (port: number): ExpressAPP => {
    const expressAPP = new ExpressAPP(port);

    /**
     * *Crea rutas para el example
     */
    const rutasExpample = crearRutaExample();
    expressAPP.agregarRuta(rutasExpample);

    expressAPP.crearServidor();
    return expressAPP;
}