import bunyan from 'bunyan';
import pjs from '../../package.json';

// * Obtiene el json package
const { version } = pjs;

// * Crea un logger
const getLogger = (serviceName: string, serviceVersion: string) => 
bunyan.createLogger({ name: `${serviceName}:${serviceVersion}` });

/**
 * * Configuración segun env
 */
const config = {
	development: {
        estado: 'development',
        log: (): bunyan => getLogger('DEVELOPMENT', version),
	},

	production: {
        estado: 'production',
        log: (): bunyan => getLogger('PRODUCCION', version),
	},

    test: {
        estado: 'test',
        log: (): bunyan => getLogger('TEST', version),
    }
};

/**
 * Adquiere una configuración segun el tipo de env
 * @param env 
 * @returns 
 */
export const getConfig = (env: string) => {
    switch (env) {
        case 'development':
            return config.development;
        case 'production':
            return config.production;
        case 'test':
            return config.test;                    
        default:
            break;
    }
    return null;
}
