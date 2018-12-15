import {env} from './server/config';
import Express from 'express';
import BodyParser from 'body-parser';
import Path from 'path';
import Morgan from 'morgan';
import Cors from 'cors';
import {WebRouter, ApiRouter} from './server/routes';
import SwaggerJSDoc from 'swagger-jsdoc';
import Compress from 'compression';

const app = Express();

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(Compress());
if (env === 'development') {
    app.use(Morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
    const swaggerDefinition = {
        info: {
            title: 'Node Swagger API',
            version: '1.0.1',
            description: 'Demonstrating how to desribe a RESTful API with Swagger',
        },
        host: 'localhost:3000',
        basePath: '/',
    };

    const options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // path to the API docs
        apis: ['./server/controllers/api/*.js'],
    };


// initialize swagger-jsdoc
    const swaggerSpec = SwaggerJSDoc(options);


    app.get('/swagger.json', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}


app.use('/api', ApiRouter);
app.use('/', WebRouter);

app.use(Express.static(Path.resolve(__dirname, 'server', 'public'), {maxAge: 31557600000}));
module.exports = app;
