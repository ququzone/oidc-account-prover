import Koa from 'koa';
import KoaLogger from 'koa-logger';
import { koaBody } from 'koa-body';
import Router from '@koa/router';

const router = new Router();
const app = new Koa();

app.use(KoaLogger());
app.use(koaBody());

router.get('/', (ctx) => {
    ctx.body = 'Welcome to OIDC account prover';
});

app.use(router.routes());

app.listen(3000);
