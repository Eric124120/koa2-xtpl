const path = require( 'path' );
const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const xtpl = require('./utils/koa2-xtpl');

const logUtil = require('./utils/log_utils');

const page_routes = require('./routes/pages/index');

const api_routes = require('./routes/api/index');

//xtemplate模板渲染
xtpl( app, {
    views: path.resolve( __dirname, 'views' )
} );

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));

app.use(json());

/***** log output *******/
// app.use(logger());
app.use(async (ctx, next) => {
    // 相应开始时间
    const start = new Date();
    // 响应间隔时间
    var ms;

    try {
        //开始进入到下一个中间件
        await next();

        ms = new Date() - start;
        //记录响应日志
        logUtil.logResponse(ctx, ms);
    } catch (error) {
        ms = new Date() - start;
        //记录异常日志
        logUtil.logError(ctx, error, ms);
    }
});

app.use(require('koa-static')(__dirname + '/public'));

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// pages routes
app.use(page_routes.routes(), page_routes.allowedMethods());

// api routes
app.use(api_routes.routes(), api_routes.allowedMethods());


module.exports = app;
