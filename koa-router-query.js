const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = ctx.query; //获取 url query Object
})

app
.use(router.routes())
.use(router.allowedMethods())


.listen('3000', () => {
    console.log('[demo] server is starting at port 3000');
})
