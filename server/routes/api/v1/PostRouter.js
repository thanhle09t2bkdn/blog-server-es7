import {PostController} from '../../../controllers/api/v1/index';
import { Router } from 'express';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get(PostController.index);
router.route('/view').get(PostController.view);

export default router;