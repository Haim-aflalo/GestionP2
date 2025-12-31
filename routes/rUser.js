import express from 'express';

import { addUser } from '../controllers/cUser.js';
import { checkBody } from '../middleware/middleware.js';

export const userRouter = express.Router();

userRouter.post('/register', checkBody, async (req, res) => {
  addUser(req, res);
});

userRouter.post('/login', checkBody, async (req, res) => {
  checkLogin(req, res);
});
