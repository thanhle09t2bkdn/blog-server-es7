import { Router } from 'express';
import {swaggerController} from '../../controllers/web'

const router = Router();

router.route('/swagger.json').get(swaggerController.index);
router.route('/view').get(swaggerController.view);
export default router;