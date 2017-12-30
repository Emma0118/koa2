const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router()

// app.use(async ctx => {
//     if(ctx.url === '/redirect') {
//         ctx.body = 'this is temp page';
//         router.redirect('/redirect', '/home');
//     }else if(ctx.url === '/home') {
//         ctx.body = 'this is home page';
//     }
// })
router
    .get('/', async ctx => {
        ctx.body = 'main page';
    })
    .get('/redirect', async ctx => {
            ctx.redirect('/');
    })
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server is listening on port 3000');
})
