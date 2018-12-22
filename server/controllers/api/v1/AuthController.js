import Response from '../../../helpers/Response';
import HTTPStatus from 'http-status';
import {userRepository} from '../../../repositories'
export default class AuthController {
    login = async (req, res) => {
        try {
            const jwt = await userRepository.authenticate(req.body);
            return Response.success(res, jwt);
        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };
}