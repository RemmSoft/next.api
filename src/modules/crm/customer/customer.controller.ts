import * as Router from 'koa-router';
import { getRepository } from 'typeorm';
import { Customer } from '../../../db/entity/customer';

const router = new Router();

router.get('/customer/get', getCustomers);
async function getCustomers(ctx: any, next: any) {
    // tslint:disable-next-line:quotemark
    const list = await getRepository(Customer).find();

    ctx.body = list;
}

const customerRouters = router.routes();

export { customerRouters };
