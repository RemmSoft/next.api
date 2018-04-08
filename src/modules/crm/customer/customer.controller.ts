import * as Router from 'koa-router';
import { Customer } from '../../../db/models/Customer';

const router = new Router();

router.get('/customer/get', getCustomers);
async function getCustomers(ctx: any, next: any) {

    const list = await Customer.findAll();

    ctx.body = list;
}

const customerRouters = router.routes();

export { customerRouters };
