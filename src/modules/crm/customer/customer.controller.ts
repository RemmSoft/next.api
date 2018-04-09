import * as Router from 'koa-router';
import { getRepository } from 'typeorm';
import { Customer } from '../../../db/entity/customer';

const router = new Router();

router.get('/api/customer/get', getCustomers);
async function getCustomers(ctx: any, next: any) {
    try {
        const list = await getRepository(Customer).find();
        ctx.body = list;
        return next();
    } catch (error) {
        console.log(error);
    }
}

const customerRouters = router.routes();

export { customerRouters };
