import {env} from './server/config';
import Express from 'express';
import BodyParser from 'body-parser';
import Path from 'path';
import Morgan from 'morgan';
import Cors from 'cors';
import {WebRouter, ApiRouter} from './server/routes';
import {error} from './server/middlewares';
import Compress from 'compression';
import FileUpload from 'express-fileupload';
const app = Express();
app.use(FileUpload({
    limits: {fileSize: 10 * 1024 * 1024},
}));
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(Compress());
app.use(Express.static(Path.resolve(__dirname, 'server', 'public'), {maxAge: 31557600000}));
app.set('view engine', 'ejs');
app.set('views', Path.join(__dirname, 'server', 'views'));
app.disable('x-powered-by');
if (env === 'development') {
    app.use(Morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
}


app.use('/api', ApiRouter);
app.use('/', WebRouter);
// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
