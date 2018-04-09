import * as Koa from 'koa';
import { router } from './route';
import { config } from './config';
import "reflect-metadata";
import { dbInit } from './db/db.init';
import { Auth } from "./auth";


// DB Init
dbInit().then(
    () => {
        Auth.init();

        const app = new Koa();

        app.use(async (ctx, next) => {
            // Log the request to the console
            console.log('Url:', ctx.url);
            // Pass the request to the next middleware function
            await next();
        });

        app.use(router.routes());
        app.use(router.allowedMethods());


        app.listen(config.port);

        console.log('Server running on port ' + config.port);
    }
);
