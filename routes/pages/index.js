/**
 * Created by huangchengwen on 2017/7/28.
 */
const router = require('koa-router')();
const page_login = require('./page_login');

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title:'xtemplate',
        content:'this is demo'
    })
})

router.use(page_login.routes(), page_login.allowedMethods());


module.exports = router;
