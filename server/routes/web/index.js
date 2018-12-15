import { Router } from 'express';

const router = Router();

router.get('/healthcheck', (req, res) => res.send('OK'));

export default router;