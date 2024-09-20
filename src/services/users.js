import { UsersCollection } from '../db/models/user.js';

export const getAllByEventsId = async (eventId) => {
  const users = await UsersCollection.find({ eventId });
  return users;
};

export const createUser = async (payload) => {
  const user = await UsersCollection.create(payload);
  return user;
};
