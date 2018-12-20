import Joi from 'joi';
import BaseValidation from "./BaseValidation";

export default class AuthValidation extends BaseValidation{

    loginForm = {
        body: {
            email: Joi.string().email({ minDomainAtoms: 2 }).required().max(255),
            password: Joi.string().min(7).max(50),
        },
    };

}