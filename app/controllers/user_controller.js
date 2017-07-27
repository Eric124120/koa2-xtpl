/**
 * Created by huangchengwen on 2017/7/27.
 */

let
    /**
     * 获取用户
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    getUser = async (ctx, next) => {
        ctx.body = {
            username: "Eric",
            age: 25
        }
    },
    /**
     * 注册用户
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    registerUser = async (ctx, next) => {
        console.log('registerUser', ctx.request.body);

        /*ctx.body = {
            status: 1,
            message: 'register success'
        }*/
    }

module.exports = {
    getUser,
    registerUser
}



