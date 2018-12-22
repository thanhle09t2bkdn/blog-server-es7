import Joi from 'joi';
import BaseValidation from "./BaseValidation";

export default class PostValidation extends BaseValidation {
    createForm = {
        body: {
            title: Joi.string().max(255).required(),
            image: Joi.string().max(255).required(),
            content: Joi.string().required(),
            userId: this.validateId.id,
            categoryId: this.validateId.id,
        }
    };
    updateForm = {
        body: {
            id: this.validateId.id,
            title: Joi.string().max(255).required(),
            image: Joi.string().max(255).required(),
            content: Joi.string().required(),
            userId: this.validateId.id,
            categoryId: this.validateId.id,
        }
    };
}