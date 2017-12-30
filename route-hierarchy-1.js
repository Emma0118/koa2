/**
 * Created by linajiema on 2017/12/29.
 */
const koa = require('koa');
const Router = require('koa-router');
const router = new Router({
    prefix : '/emma' // add prefix for all router
});

router
    .get('/home', async ctx => {
    ctx.body = 'Home Page';
})
    .get('/todo', async ctx => {
        ctx.body = 'Todo Page';
    })
const app = new koa();

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log('quick-start is listening port 3000');
});
