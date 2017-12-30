const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    if(ctx.url === '/index') {
        ctx.cookies.set('MyName', 'Emma', {
            domain : '127.0.0.1',
            path : '/index',
            maxAge : 1000 * 60 * 60 * 24,
            expires : new Date('2018-12-31'),
            httpOnly : false,
            overwrite : false
        });
        ctx.body = 'cookie has been set';
    }else {
        // ctx.body = 'please go to index page to set cookie'
        if(ctx.url === '/getInfo') {
            if(ctx.cookies.get('MyName')) {
                ctx.body = ctx.cookies.get('MyName');
            }
        }else {
            ctx.body = 'cookie is not found';
        }
    }
})

app.listen('3000', () => {
    console.log('[demo] server is starting at port 3000');
})
