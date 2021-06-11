import express from 'express';

import { isAuth } from '../utils.js';

import {
  seedUser,
  signinUser,
  registerUser,
  findUserById,
  updateUser,
} from '../controllers/usersControllers.js';

const userRouter = express.Router();

userRouter.get('/seed', seedUser);

userRouter.post('/signin', signinUser);

userRouter.post('/register', registerUser);

userRouter.get('/:id', findUserById);

userRouter.put('/profile', isAuth, updateUser);

export default userRouter;
