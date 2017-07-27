const router = require('koa-router')();
const page_login = require('./pages/page_login');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
      title:'xtemplate',
      content:'this is demo'
  })
})


module.exports = router;
