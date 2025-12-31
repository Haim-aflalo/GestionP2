import express from 'express';

import { createMessage } from '../controllers/cMessage.js';
import { checkUserExist } from '../middleware/middleware.js';

export const msgRouter = express.Router();

msgRouter.post('/create', checkUserExist, (req, res) => {
  createMessage(req, res);
});
