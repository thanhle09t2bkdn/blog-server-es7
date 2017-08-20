import {PostApiController} from '../controllers';
import Response from '../helpers/Response';
module.exports = (app) => {
    app.get('/', (req, res) => res.json(Response.returnSuccess('Welcome to the Patient App')));
};