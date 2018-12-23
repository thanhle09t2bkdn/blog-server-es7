import { Router } from 'express';
import {siteController} from '../../../controllers/api/v1';
import {auth} from '../../../middlewares';

const router = Router();

router.route('/upload').post([auth.mustLogin], siteController.upload);

export default router;