import ApiError from '../helpers/ApiError';
import HttpStatus from 'http-status';
import {userRepository} from '../repositories';
import JWT from '../helpers/JWT';
import {JWT_SECRET} from '../config';

export default class Auth {
    mustLogin = async (req, res, next) => {
        const token = JWT.getToken(req);
        if (!token) {
            if (!next) {
                throw new ApiError({
                    message: 'Authorization failed',
                    status: HttpStatus.UNAUTHORIZED,
                });
            }
            return next(new ApiError({
                message: 'Authorization failed',
                status: HttpStatus.UNAUTHORIZED,
            }));
        }
        let jwtPayload = null;
        try {
            jwtPayload = await JWT.verify(token, JWT_SECRET);
        } catch (error) {
            if (!next) {
                throw error;
            }
            return next(new ApiError({
                message: error ? error.message : 'Unauthorized',
                status: HttpStatus.UNAUTHORIZED,
            }));
        }

        let user = null;
        try {
            user = await this.verifyUser(jwtPayload);
        } catch (error) {
            if (!next) {
                throw error;
            }
            return next(new ApiError({
                message: error ? error.message : 'Unauthorized',
                status: HttpStatus.UNAUTHORIZED,
            }));
        }
        req.user = user;

        if (next) {
            return next();
        }
    };

    verifyUser = async (data) => {
        const user = await userRepository.findByPk(data.id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    };

}