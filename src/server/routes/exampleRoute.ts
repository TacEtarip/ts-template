import { Router } from 'express';
import Route from './Route';

// ** Crea una ruta
export const crearRutaExample = (): Route => {

    const rutaNombre = 'example';
    const router = Router();

    // *Agregar las rutas get, post aqui
    
    router.get('/', (req, res) => {
        return res.json({message: `Ruta /${rutaNombre} funciona`});
    });

    const rutaEjemplo = new Route(rutaNombre, router);

    return rutaEjemplo;
};
