import Response from '../../../helpers/Response';
import HTTPStatus from 'http-status';
import {userRepository} from '../../../repositories';

export default class UserController {
    view = async (req, res) => {
        try {
            const data = req.query;
            const {id} = data;

            const user = await userRepository.findByPk(id);
            return Response.success(res, user);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };
}