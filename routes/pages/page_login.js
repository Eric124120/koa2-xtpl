/**
 * Created by huangchengwen on 2017/7/27.
 */
const router = require('koa-router')();

router.get('/login', async (ctx, next) => {
    await ctx.render('login', {
        name: 'login...'
    })
});


module.exports = router;

