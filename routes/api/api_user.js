/**
 * Created by huangchengwen on 2017/7/27.
 */
const router = require('koa-router')();
const user_controller = require('../../app/controllers/user_controller');


router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);


module.exports = router;