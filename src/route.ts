
import * as Router from 'koa-router';
const router = new Router();

// router.get('/*', async (ctx) => {
//     ctx.body = 'Hello World!';
// });


// import modules
import { customerRouters } from './modules/crm/customer/customer.controller';
router.use(customerRouters);

const routes = router.routes();

export { routes };
