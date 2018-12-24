import Joi from 'joi';
import Uuid from 'uuid';

export default class BaseValidation {

    pageInfo = {
        page: Joi.number().min(1).required(),
        limit: Joi.number().min(1).max(1000).required(),
    };

    validateId = {
        id: Joi.string().guid(Uuid.v4(), 'uuidV4').required(),
    };

    index = {
        query: this.pageInfo
    };

    view = {
        query: this.validateId
    };

}