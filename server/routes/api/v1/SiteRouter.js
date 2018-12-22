import { Router } from 'express';
import Validate from 'express-validation';
import {siteController} from '../../../controllers/api/v1';

const router = Router();

router.route('/upload').post(siteController.upload);

export default router;