import {postController} from '../../../controllers/api/v1';
import { Router } from 'express';

const router = Router(); // eslint-disable-line new-cap

router.route('/index').get(postController.index);
router.route('/view').get(postController.view);

export default router;