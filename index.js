import config from './server/config';
import Express from 'express';
import BodyParser from 'body-parser';
import Path from 'path';
import Morgan from 'morgan';
import Cors from 'cors';
import Api from './server/routes/api';
import Web from './server/routes/web';
import SwaggerJSDoc from 'swagger-jsdoc';

const app = Express();

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
if (process.env.NODE_ENV === 'development') {
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


app.use('/api', Api);
// app.use('/', Web);

app.use(Express.static(Path.resolve(__dirname, '..', 'public'), {maxAge: 31557600000}));
module.exports = app;
const PORT = config.port || 9000;
app.listen(config.port, () => {
    console.log(`App listening on port ${PORT}!`);
});
