import Express from 'express';
import BodyParser from 'body-parser';
import Path from 'path';
import Morgan from 'morgan';
import Cors from 'cors';
import RoutesApi from '../routes/api';

const app = Express();

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
if (process.env.NODE_ENV === 'development') {
	app.use(Morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
}

app.use('/api', RoutesApi);

app.use(Express.static(Path.resolve(__dirname, '..', 'public'), {maxAge: 31557600000}));
module.exports = app;