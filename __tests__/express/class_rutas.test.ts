import Route from "../../src/server/routes/Route";
import { Router } from 'express';

describe('Crea una ruta correctamente', () => {
    it('Crea una instancia de ruta', () => {
        const anyRouter = Router();
        const instanceRuta = new Route('/test', anyRouter);
        const instanceRutaTwo = new Route('testTwo', anyRouter);

        expect(instanceRuta).toBeInstanceOf(Route);
        expect(instanceRuta.ruta).toBe('/test');
        expect(instanceRutaTwo.ruta).toBe('/testTwo');
        expect(instanceRuta.router).toBe(anyRouter);
        
    });

    it('Crea una instancia de ruta agrega /', () => {
        const anyRouter = Router();
        const instanceRutaTwo = new Route('testTwo', anyRouter);
        expect(instanceRutaTwo.ruta).toBe('/testTwo');
    });
});
