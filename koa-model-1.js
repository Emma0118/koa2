const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new koa();

app.use( //加载引擎模板
    views(path.join(__dirname, './view'), {
        extension : 'ejs'
    })
)
app.use(async ctx => {
    let title = 'koa2 and ejs';
    await ctx.render('index', {
        title
    })
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
