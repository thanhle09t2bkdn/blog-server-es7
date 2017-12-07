import HTTPStatus from 'http-status';
import {env} from '../config/index';

export default class Response {

    static success(res, data = null) {
        if (data) {
            return res
                .status(HTTPStatus.OK)
                .send({
                    data: data,
                });
        }
        return res
            .status(HTTPStatus.OK)
            .send();
    }

    static error(res, e, code) {
        let error = e;
        if (typeof e === 'string') {
            error = new Error(e);
        }
        if (env === 'development') {
            console.log(error);
        }
        return res
            .status(code)
            .send({
                error: {
                    message: error.message,
                    code: code,
                },
            });
    }

};
