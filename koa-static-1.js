const koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new koa();

const staticPath = './static'; //http://localhost:3000/style/app.css

app
.use(static(
    path.join(__dirname, staticPath)
))

app.use(async ctx => {
    ctx.body = 'Hello static';
})

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})
