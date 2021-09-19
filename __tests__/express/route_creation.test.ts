import { Router } from 'express';
import ExpressAPP from '../../src/server/ExpressAPP';
import request from 'supertest';
import Route from '../../src/server/routes/Route';

const rutaBase = '/test';

const crearRutaTest = (): Route => {

    const rutaNombre = 'test';
    const router = Router();

    // *Agregar las rutas get, post aqui
    
    router.get('/', (req, res) => {
        return res.json({message: `Ruta /${rutaNombre} funciona`});
    });

    const rutaEjemplo = new Route(rutaNombre, router);

    return rutaEjemplo;
};


describe('Test para la creacion correcta de una ruta', () => {
    let appExp: ExpressAPP;
    let rutaCreada: Route;

    beforeAll(() => {
        appExp = new ExpressAPP(8082);
        rutaCreada = crearRutaTest();
        appExp.app.use(rutaCreada.ruta, rutaCreada.router);
    });

    it('La ruta base es la adecuada', () => {
        expect(rutaCreada.ruta).toBe(rutaBase);
    });

    it('La ruta / es correcta', async () => {
        const response = await request(appExp.app).get(rutaBase);
        expect(response.statusCode).toBe(200);
    });

    afterAll(() => {
        appExp.server.close();
    });
    
});
