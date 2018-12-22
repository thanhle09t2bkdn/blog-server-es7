import Joi from 'joi';
import BaseValidation from "./BaseValidation";

export default class AuthValidation extends BaseValidation{

    loginForm = {
        body: {
            email: Joi.string().email().required().max(255),
            password: Joi.string().min(6).max(50),
        },
    };

}