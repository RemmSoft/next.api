import * as Koa from 'koa';
import { routes } from './route';
import { config } from './config';
import "reflect-metadata";
import { dbInit } from './db/db.init';

// DB Init
dbInit().then(
    () => {
        const app = new Koa();

        app.use(async (ctx, next) => {
            // Log the request to the console
            console.log('Url:', ctx.url);
            // Pass the request to the next middleware function
            await next();
        });

        app.use(routes);

        app.listen(config.port);

        console.log('Server running on port ' + config.port);
    }
);
