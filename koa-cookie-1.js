const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    if(ctx.url === '/index') {
        ctx.cookies.set('MyName', 'Emma');
        ctx.body = 'cookie is set'
    }else {
        ctx.body = 'please go to index page to set cookie';
    }

})
 app.listen('3000', () => {
     console.log('[demo] server is starting at port 3000');
 })
