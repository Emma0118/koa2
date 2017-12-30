/**
 * Created by linajiema on 2017/12/29.
 */

/**
 * this demo implement ctx.request to get information from GET method
 * */
const koa = require('koa');
const app = new koa();
app.use(async (ctx) => {
    let url = ctx.url;
    let request = ctx.request; //获取 get 请求

    //get GET request by context.
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    let req_query = request.query;
    let req_querystring = request.querystring;

    ctx.body = {
        url,
        request,
        ctx_query,
        ctx_querystring,
        req_query,
        req_querystring
    }
})

app.listen(9000);
console.log('[demo] start-quick is starting at port 9000');
