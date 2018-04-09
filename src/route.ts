
import * as Router from 'koa-router';
import { firebaseAuthMiddleware } from "./auth";
import { customerRouters } from './modules/crm/customer/customer.controller';
import { authRouters } from "./modules/auth/auth.controller";

const router = new Router();
// auth
router.use('/api', firebaseAuthMiddleware);

// import modules
router.use(customerRouters);
router.use(authRouters);

export { router };
