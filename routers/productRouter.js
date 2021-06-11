import express from 'express';

import {
  getAllProducts,
  seedProducts,
  addProduct,
  findProductById,
} from '../controllers/productsControllers.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);

productRouter.get('/seed', seedProducts);

productRouter.post('/addproduct', addProduct);

productRouter.get('/:id', findProductById);

export default productRouter;
