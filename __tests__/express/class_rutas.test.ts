import Route from '../../src/lib/Route';

describe('Crea una ruta correctamente', () => {
    it('Crea una instancia de ruta', () => {
        const instanceRuta = new Route('/test');
        const instanceRutaTwo = new Route('testTwo');

        expect(instanceRuta).toBeInstanceOf(Route);
        expect(instanceRuta.ruta).toBe('/test');
        expect(instanceRutaTwo.ruta).toBe('/testTwo');
    });

    it('Router es correcto', () => {
        const instanceRuta = new Route('/test');
        expect(instanceRuta.router.get).toBeInstanceOf(Function)
    });
});
