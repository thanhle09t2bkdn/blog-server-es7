import {PostApiController} from '../controllers';
import Response from '../helpers/Response';
import Express from 'express';

const router = Express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);
//
// // mount user routes at /users
// router.use('/users', userRoutes);
//
// // mount auth routes at /auth
// router.use('/auth', authRoutes);
router.get('/', (req, res) => res.json(Response.returnSuccess('Welcome to the Patient App')));

export default router;