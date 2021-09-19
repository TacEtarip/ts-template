import ExpressAPP from '../../src/server/ExpressAPP';
import request from 'supertest';
import { IExpressNecesaryParams } from '../../src/lib/ExpressNecesary';
const testPORT = 8081;

describe('Crear servidor usando express', () => {
    describe('Inicializa la app correctamente', () => {
        let expInstance: ExpressAPP;
        beforeAll(() => {
            jest.clearAllMocks();
            jest.spyOn(ExpressAPP.prototype, 'agregarConfiguracionBasica');
            jest.spyOn(ExpressAPP.prototype, 'agregarRutas');
            jest.spyOn(ExpressAPP.prototype, 'agregarDocumentacion');
            jest.spyOn(ExpressAPP.prototype, 'crearServidor');
            expInstance = new ExpressAPP(testPORT);
        });

        it('Instancia app correcta', () => {
            expect(expInstance).toBeInstanceOf(ExpressAPP);
        });
        
        it('La aplicacion ejecuta los metodos necesarios', () => {
            expect(expInstance.agregarConfiguracionBasica).toHaveBeenCalledTimes(1);
            expect(expInstance.agregarRutas).toHaveBeenCalledTimes(1);
            expect(expInstance.agregarDocumentacion).toHaveBeenCalledTimes(1);
            expect(expInstance.crearServidor).toHaveBeenCalledTimes(1);
        });

        it('La ruta / redirije', async () => {
            const response = await request(expInstance.app).get('/');
            expect(response.statusCode).toBe(302);
        });

        afterAll(() => {
            expInstance.server.close();
        });
        
    });
})