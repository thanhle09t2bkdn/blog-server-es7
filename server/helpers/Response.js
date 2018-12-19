import HTTPStatus from 'http-status';
import {env} from '../config/index';

export default class Response {

    static success(res, data, pageInfo = null) {
        if (pageInfo) {
            return res
                .status(HTTPStatus.OK)
                .json({
                    data: data,
                    pageInfo
                });
        } else {
            return res
                .status(HTTPStatus.OK)
                .json({
                    data: data,

                });
        }
    }

    static error(res, e, code = HTTPStatus.BAD_REQUEST) {
        let error = e;
        if (typeof e === 'string') {
            error = new Error(e);
        }
        if (env === 'development') {
            console.log(error);
        }
        return res
            .status(code)
            .json({
                error: {
                    message: error.message,
                    code: code,
                    statusCode: error.statusCode
                },
            });
    }

};
