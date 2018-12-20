import {categoryController} from '../../../controllers/api/v1';
import { Router } from 'express';
import {categoryValidation} from '../../../validations';
import Validate from 'express-validation';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get([Validate(categoryValidation.index)], categoryController.index);
router.route('/view').get([Validate(categoryValidation.view)], categoryController.view);

export default router;