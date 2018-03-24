import * as dotenv from 'dotenv';

dotenv.config();

class AppConfig {
    port: number;
}

const configs: any = {
    production: {
        port: process.env.APP_PORT || 16001,
    },
    development: {
        port: process.env.APP_PORT || 16002,
    }
};

export const config: AppConfig = { ...configs[process.env.NODE_ENV || 'development'] }; 