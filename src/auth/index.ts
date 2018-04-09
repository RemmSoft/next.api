import * as admin from "firebase-admin";
import * as serviceAccount from './serviceAccountKey.json';



export class Auth {
  public static init() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL: process.env.FB_DATABASE_URL
    });
  }
}

export async function firebaseAuthMiddleware(ctx: any, next: any) {
  const authorization = ctx.req.headers['authorization'];
  if (authorization) {
    try {
      const token = authorization.split(' ');
      const decodedToken = await admin.auth().verifyIdToken(token[1]);
      ctx.state.user = decodedToken;
      return next();
    } catch (err) {
      console.log(err);
      ctx.status = 401;
    }
  } else {
    console.log('Authorization header is not found');
    ctx.status = 401;
  }
}