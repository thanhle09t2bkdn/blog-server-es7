import {categoryController} from '../../../controllers/api/v1';
import { Router } from 'express';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get(categoryController.index);
router.route('/view').get(categoryController.view);

export default router;