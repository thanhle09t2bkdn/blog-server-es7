import {postController} from '../../../controllers/api/v1';
import { Router } from 'express';
import Validate from 'express-validation';
import {postValidation} from '../../../validations';
import {auth} from '../../../middlewares';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get([Validate(postValidation.index), auth.mustLogin], postController.index);
router.route('/view').get([Validate(postValidation.view), auth.mustLogin], postController.view);
router.route('/create').post([Validate(postValidation.createForm), auth.mustLogin], postController.create);
router.route('/update').put([Validate(postValidation.updateForm), auth.mustLogin], postController.update);

export default router;