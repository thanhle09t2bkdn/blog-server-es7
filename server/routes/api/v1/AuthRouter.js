import { Router } from 'express';
import Validate from 'express-validation';
import {authController} from '../../../controllers/api/v1';
import {authValidation} from '../../../validations';

const router = Router();

router.route('/login').post(Validate(authValidation.loginForm), authController.login);

export default router;