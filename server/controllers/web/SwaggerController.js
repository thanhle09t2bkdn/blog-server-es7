'use strict';
import Path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import {swagger} from '../../config';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
    info: {
        title: swagger.APP_NAME,
        version: swagger.APP_VERSION,
        description: swagger.APP_DESCRIPTION
    },
    host: swagger.APP_HOST
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: [
        Path.join(__rootDir, 'server', 'docs', '*.yml'),
        Path.join(__rootDir, 'server', 'docs', '*.yaml'),
    ]
};
export default class SwaggerController {
    index = async (req, res) => {
        const swaggerSpec = swaggerJSDoc(swaggerOptions);
        return res.json(swaggerSpec);
    };

    view = async (req, res) => {
        return res.render('swagger/index', {swaggerUrl: swagger.SWAGGER_URL});
    };
}