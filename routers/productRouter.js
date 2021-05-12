import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { products } from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const currentProduct = await Product.findById(req.params.id);

    if (currentProduct) {
      res.send(currentProduct);
    } else {
      res.status(404).send('Product Not Found');
    }
  })
);

export default productRouter;
