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
    // await Product.remove({});
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

productRouter.post(
  '/addproduct',
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.product.name,
      brand: req.body.product.brand,
      model: req.body.product.model,
      makat: req.body.product.makat,
      // image: req.body.image,
      category: req.body.product.category,
      price: req.body.product.price,
      countInStock: req.body.product.countInStock,
      isNewComputer: req.body.product.isNewComputer,
      CPUmodel: req.body.product.CPUmodel,
      hardDiskSize: req.body.product.hardDiskSize,
      computerMemorySize: req.body.product.computerMemorySize,
      screen: req.body.product.screen,
      operatingSystem: req.body.product.operatingSystem,
    });
    const createdProduct = await product.save();
    res.send({
      createdProduct: createdProduct,
    });
  })
);

export default productRouter;
