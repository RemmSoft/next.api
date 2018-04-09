import * as Router from 'koa-router';
import * as firebase from "firebase";
import * as dotenv from 'dotenv';

dotenv.config();

const router = new Router();

const clientConfig = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    storageBucket: process.env.FB_STORAGE_BUCKET,
};

firebase.initializeApp(clientConfig);

router.get('/login', authLogin);
async function authLogin(ctx: any, next: any) {
    const email = ctx.query.email || '';
    const pass = ctx.query.pass || '';

    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, pass) as firebase.User;
        const idToken = await user.getIdToken(true);

        ctx.body = { token: idToken };
        return next();
    } catch (error) {
        ctx.body = { msg: 'AUTH01' };
        ctx.status = 400;
    }
}

const authRouters = router.routes();

export { authRouters };
