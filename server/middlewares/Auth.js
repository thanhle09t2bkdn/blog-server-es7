import ApiError from '../helpers/ApiError';
import HttpStatus from 'http-status';
import {User} from '../models';

export default class Auth {
    handleJWT = (req, res, next, roles) => async (err, user, info) => {
        const error = err || info;
        const logIn = Promise.promisify(req.logIn);
        const apiError = new ApiError({
            message: error ? error.message : 'Unauthorized',
            status: HttpStatus.UNAUTHORIZED,
            stack: error ? error.stack : undefined,
        });

        try {
            if (error || !user) throw error;
            await logIn(user, {session: false});
        } catch (e) {
            return next(apiError);
        }

        if (roles === LOGGED_USER) {
            if (user.role !== User.Roles.ADMN && req.params.userId !== user.id) {
                apiError.status = HttpStatus.FORBIDDEN;
                apiError.message = 'Forbidden';
                return next(apiError);
            }
        } else if (!roles.includes(user.role)) {
            apiError.status = HttpStatus.FORBIDDEN;
            apiError.message = 'Forbidden';
            return next(apiError);
        } else if (err || !user) {
            return next(apiError);
        }

        req.user = user;

        return next();
    };

}