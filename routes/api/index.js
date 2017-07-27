/**
 * Created by huangchengwen on 2017/7/27.
 */
let router = require('koa-router')();
let api_user = require('./api_user');

// api前缀
router.prefix('/api');

// 接口设置
router.use('/users', api_user.routes(), api_user.allowedMethods());


module.exports = router;