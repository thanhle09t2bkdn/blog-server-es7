import {postController} from '../../../controllers/api/v1';
import { Router } from 'express';
import Validate from 'express-validation';
import {postValidation} from '../../../validations';
import {auth} from '../../../middlewares';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get([Validate(postValidation.index), auth.mustLogin], postController.index);
router.route('/view').get([Validate(postValidation.view), auth.mustLogin], postController.view);

export default router;