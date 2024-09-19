import { Router } from 'express';
import eventRouter from './events.js';
import userRouter from './users.js';

const router = Router();

router.use('/users', userRouter);
router.use('/events', eventRouter);

export default router;
