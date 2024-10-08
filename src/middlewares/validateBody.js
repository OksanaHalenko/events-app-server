import createError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createError(400, 'Bad Request', {
      errors: err.details.map((err) => err.message).join(', '),
    });
    next(error);
  }
};
