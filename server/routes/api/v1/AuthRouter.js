import { Router } from 'express';
import {checkSchema} from 'express-validator/check';
import {authController} from '../../../controllers/api/v1';
import {AuthValidation} from '../../../validations';

const router = Router();

router.route('/login/:email/password').post([checkSchema(AuthValidation.loginForm), AuthValidation.index], authController.login);

export default router;