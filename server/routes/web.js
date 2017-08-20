import Express from 'express';

const router = Express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) =>
    res.send('Web')
);

export default router;