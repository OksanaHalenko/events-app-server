import { json, Router } from 'express';

import { validateBody } from '../middlewares/validateBody.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { createUserSchema } from '../validation/users.js';

import {
  createUserController,
  getUsersController,
} from '../controllers/users.js';

const router = Router();
const jsonParser = json();

router.get('/:eventId', ctrlWrapper(getUsersController));

router.post(
  '/:eventId',
  jsonParser,
  validateBody(createUserSchema),
  ctrlWrapper(createUserController),
);
export default router;
