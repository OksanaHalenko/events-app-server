import { getAllEvents } from '../services/events.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const events = await getAllEvents({
    page,
    perPage,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: events,
  });
};
