/**
 * Created by linajiema on 2017/12/29.
 */

/**
 * this demo implement ctx.request to get information from GET method
 * */
const koa = require('koa');
const app = new koa();
app.use(async (ctx) => {
    let url = ctx.uri;
    let request = ctx.request; //获取 get 请求
    let req_query = ctx.query;
    let req_querystring = ctx.querystring;
    
    ctx.body = {
        url,
        request,
        req_query,
        req_querystring
    }
})

app.listen(9000);
console.log('[demo] start-quick is starting at port 9000');