import express, { json } from 'express';
import cors from 'cors';
import { env } from './utils/env.js';

import contactsRouret from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './utils/logger.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());
  // app.use(logger);

  app.use('/contacts', contactsRouret);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(env('PORT', 3000));
  app.listen(port, () => console.log(`Server is running on port ${port}`));
};
