import { Router } from 'express';
import {userValidation} from '../../../validations';
import {auth} from '../../../middlewares';
import Validate from 'express-validation';
import {userController} from '../../../controllers/api/v1';

const router = Router();

router.route('/view').get([Validate(userValidation.view), auth.mustLogin], userController.view);
export default router;