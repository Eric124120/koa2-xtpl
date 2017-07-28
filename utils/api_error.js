/**
 * Created by huangchengwen on 2017/7/28.
 */
const ApiErrorNames = require('./api_error_names');

class ApiError extends Error {
    constructor(error_name) {
        super();

        var error_info = ApiErrorNames.getErrorInfo(error_name);

        this.name = error_name;
        this.code = error_info.code;
        this.message = error_info.message;
    }
}

module.export = ApiError;