const koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new koa();

let home = new Router();
let page = new Router();
home
    .get('/lina', async ctx => {
        ctx.body = 'Home Lina';
    })
    .get('/todo', async ctx => {
        ctx.body = 'Home todo'
    })
page
    .get('/lina', async ctx => {
        ctx.body = 'Page Lina';
    })
    .get('/todo', async ctx => {
        ctx.body = 'Page Todo';
    })

//装载所有子路由，并设置不同前层级
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

//加载中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
