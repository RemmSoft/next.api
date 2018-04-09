import * as Koa from 'koa';
import { router } from './route';
import { config } from './config';
import { sequelize, dbSeed } from './db/index';
import { Auth } from "./auth";

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

(async () => {
    await sequelize
        .sync({ force: true });

    await dbSeed();

    app.listen(config.port);
    console.log('Server running on port ' + config.port);
})();




