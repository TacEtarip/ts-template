import { getConfig } from '../src/config/config';
import bunyan from 'bunyan';

describe('La configuración minima es correcta', () => {

    it('Retorna la config de development', () => {
        const config = getConfig('development');
        expect(config).toHaveProperty('log');
        expect(config).toHaveProperty('estado');

        expect(config.estado).toBe('development');

        const logger = config.log();
        expect(logger).toBeInstanceOf(bunyan);
    });

    it('Retorna la config de production', () => {
        const config = getConfig('production');
        expect(config).toHaveProperty('log');
        expect(config).toHaveProperty('estado');

        expect(config.estado).toBe('production');

        const logger = config.log();
        expect(logger).toBeInstanceOf(bunyan);
    });

    it('Retorna la config de test', () => {
        const config = getConfig('test');
        expect(config).toHaveProperty('log');
        expect(config).toHaveProperty('estado');

        expect(config.estado).toBe('test');

        const logger = config.log();
        expect(logger).toBeInstanceOf(bunyan);
    });

    it('Retorna null si no se da un env correcto', () => {
        expect(getConfig('')).toBeNull();
    });
});
