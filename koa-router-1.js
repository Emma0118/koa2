/**
 * Created by linajiema on 2017/12/29.
 */
const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router //多页面配置
    .get('/', (ctx, next) => {
    ctx.body = "Hello Router";
})
    .get('/todo', (ctx, next) => {
        ctx.body = "Todo page";
    });

app
.use(router.routes())
.use(router.allowedMethods);

app.listen(3000, () => {
    console.log('koa is listening port 3000 ... ...');
})