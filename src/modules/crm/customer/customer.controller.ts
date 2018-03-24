import * as Router from 'koa-router';

const router = new Router();

router.get('/customer/get', getCustomers);
async function getCustomers(ctx: any, next: any) {
    // tslint:disable-next-line:quotemark
    const list = [{ name: "Ali" }, { name: "Veli" }];
    ctx.body = list;
}

const customerRouters = router.routes();

export { customerRouters };
