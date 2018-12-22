import {Router} from 'express';
import PostRouter from './PostRouter';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import CategoryRouter from './CategoryRouter';
import SiteRouter from './SiteRouter';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/posts', PostRouter);
router.use('/users', UserRouter);
router.use('/categories', CategoryRouter);
router.use('/site', SiteRouter);

export default router;
