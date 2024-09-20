import createHttpError from 'http-errors';
import { createUser, getAllByEventsId } from '../services/users.js';

export const getUsersController = async (req, res, next) => {
  const { eventId } = req.params;
  const users = await getAllByEventsId(eventId);

  if (users.length === 0) {
    return next(createHttpError.NotFound('Users not found'));
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found user with id ${eventId}!`,
    data: users,
  });
};

export const createUserController = async (req, res) => {
  const { eventId } = req.params;
  const newUser = {
    eventId,
    ...req.body,
  };

  const contact = await createUser(newUser);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a user!',
    data: contact,
  });
};
