/**
 * Created by linajiema on 2017/12/29.
 */
const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(async ctx => {
    if(ctx.url === '/' && ctx.method === 'GET') {
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
        `
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST') { //get POST request
        ctx.body = ctx.request.body // use ctx.request.body to get response from POST, and bodyParser will format it to JSON
    }else {
        ctx.body = `<h1>404!</h1>`
    }
})
app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000');
})
