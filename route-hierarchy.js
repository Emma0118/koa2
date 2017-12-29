/**
 * Created by linajiema on 2017/12/29.
 */
const koa = require('koa');
const Router = require('koa-router');
const router = new Router({
    prefix : '/emma' // add prefix for all router
});
const app = new koa();

