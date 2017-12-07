import { Router } from 'express';
import PostRouter from './PostRouter';

const router = Router();
router.use('/posts', PostRouter);

export default router;