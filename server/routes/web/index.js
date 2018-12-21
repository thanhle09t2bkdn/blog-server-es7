import { Router } from 'express';
import SwaggerRouter from './SwaggerRouter';
import {env} from '../../config';

const router = Router();

router.get('/healthcheck', (req, res) => res.send('OK'));
if (env !== 'production') {
    router.use('/swagger', SwaggerRouter);
}

export default router;