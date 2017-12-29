/**
 * Created by linajiema on 2017/12/29.
 */
const koa = require('koa');
const app = new koa();
app.use(async ctx => {
    let url = ctx.request.url;
    ctx.body = url;
})
app.listen(3000, () => {

})