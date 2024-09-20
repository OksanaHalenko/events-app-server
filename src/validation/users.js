import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  birthDate: Joi.date().less('now').required(),
  sourceInfo: Joi.string()
    .valid('social media', 'friends', 'found myself')
    .required(),
});
