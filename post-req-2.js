/**
 * Created by linajiema on 2017/12/29.
 */
/**
 * This program demonstrates how to get POST response by koa2
 * */

const koa = require('koa');
const app = new koa();
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
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = await parsePostData(ctx)
    }else {
        ctx.body = `<h1>404!</h1>`
    }
})
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try{
            let postdata = '';
            ctx.req.on('data', data => {
                postdata += data;
            })
            ctx.req.addListener('end', () => {
                let queryData = parseQueryStr(postdata);
                resolve(queryData); //userName=emma&age=18&webSite=www.emma.com
            })
        }catch (error) {
            reject(error);
        }
    })
}
function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log( queryStrList);
    for(let [index, queryStr] of queryStrList.entries()) {
        
        let itemList = queryStr.split('=');
        // console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000');
})