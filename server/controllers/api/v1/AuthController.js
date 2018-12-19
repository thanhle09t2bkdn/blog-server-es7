import Response from '../../../helpers/Response';
import HTTPStatus from 'http-status';

export default class AuthController {
    login = async (req, res) => {
        try {
            return Response.success(res, req.body);

        } catch (e) {
            return Response.error(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };
}