import Route from '../../lib/Route';

// ** Crea una ruta
export const crearRutaExample = (): Route => {

    const rutaNombre = '/example'

    const excampleRoute = new Route(rutaNombre);

    // *Agregar las rutas get, post aqui
    
    excampleRoute.router.get('/', (req, res) => {
        return res.json({message: `Ruta ${rutaNombre} funciona`});
    });

    return excampleRoute;
};
