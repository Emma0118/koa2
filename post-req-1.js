/**
 * Created by linajiema on 2017/12/29.
 */
/**
 * this demo implement ctx.req to send POST by koa2
 * */
const koa = require('koa');
const app = new koa();
app.use(async ctx => {
    if(ctx.url ==='/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = '接收到请求';
    }else {
        ctx.body = `<h1>404!</h1>`
    }
})
app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000');
})