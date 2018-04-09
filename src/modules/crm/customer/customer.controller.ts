import * as Router from 'koa-router';
import { Customer } from '../../../db/models/Customer';

const router = new Router();

router.get('/api/customer/get', getCustomers);
async function getCustomers(ctx: any, next: any) {

    // ctx.body = JSON.stringify({
    //     message: `You're logged in as ${ctx.state.user.email} with Firebase UID: ${ctx.state.user.uid}`
    // });

    try {
        const list = await Customer.findAll();
        ctx.body = list;
        return next();
    } catch (error) {
        console.log(error);
    }
}

const customerRouters = router.routes();

export { customerRouters };
