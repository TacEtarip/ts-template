import ExpressAPP from '../../src/server/ExpressAPP';
import Route from '../../src/lib/Route';
import request from 'supertest';
import http from 'http';
const testPORT = 8081;

describe('Crear servidor usando express', () => {
    describe('Inicializa la app correctamente', () => {
        let expInstance: ExpressAPP;
        let server: http.Server;
        beforeAll(() => {
            jest.clearAllMocks();
            jest.spyOn(ExpressAPP.prototype, 'agregarConfiguracionBasica');
            jest.spyOn(ExpressAPP.prototype, 'agregarRuta');
            jest.spyOn(ExpressAPP.prototype, 'agregarDocumentacion');
            jest.spyOn(ExpressAPP.prototype, 'crearServidor');
            expInstance = new ExpressAPP(testPORT);
            const rutaTest = new Route('/test');
            rutaTest.router.get('/', (req, res) => {
                res.sendStatus(200);
            })
            expInstance.agregarRuta(rutaTest)
            server = expInstance.crearServidor();
        });

        it('Instancia app correcta', () => {
            expect(expInstance).toBeInstanceOf(ExpressAPP);
        });

        it('El servidor es correcto', () => {
            expect(server).toBeInstanceOf(http.Server);
        });
        
        it('La aplicacion ejecuta los metodos necesarios', () => {
            expect(expInstance.agregarConfiguracionBasica).toHaveBeenCalledTimes(1);
            expect(expInstance.agregarDocumentacion).toHaveBeenCalledTimes(1);
            expect(expInstance.crearServidor).toHaveBeenCalledTimes(1);
        });

        it('La ruta / redirije', async () => {
            const response = await request(expInstance.app).get('/');
            expect(response.statusCode).toBe(302);
        });

        it('Agrega path correctamente', async () => {
            const response = await request(expInstance.app).get('/test');
            expect(response.statusCode).toBe(200);
        })

        afterAll(() => {
            expInstance.server.close();
        });
        
    });
})