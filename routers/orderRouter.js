import express from 'express';
import { isAuth } from '../utils.js';

import { addNewOrder, getOrderById } from '../controllers/ordersControllers.js';

const orderRouter = express.Router();

// orderRouter.get('/mine', isAuth, getAllOrders);

orderRouter.post('/', isAuth, addNewOrder);

orderRouter.get('/:id', isAuth, getOrderById);

export default orderRouter;
