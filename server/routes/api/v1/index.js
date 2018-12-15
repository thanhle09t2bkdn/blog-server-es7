import {Router} from 'express';
import PostRouter from './PostRouter';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/posts', PostRouter);
router.use('/users', UserRouter);

export default router;
