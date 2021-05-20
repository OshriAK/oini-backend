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

productRouter.post(
  '/addproduct',
  expressAsyncHandler(async (req, res) => {
    console.log('req.body', req.body);
    const product = new Product({
      name: req.body.newProduct.name,
      brand: req.body.newProduct.brand,
      model: req.body.newProduct.model,
      makat: req.body.newProduct.makat,
      // image: req.body.newProduct.image,
      category: req.body.newProduct.category,
      price: req.body.newProduct.price,
      countInStock: req.body.newProduct.countInStock,
      isNewComputer: req.body.newProduct.isNewComputer,
      detail: {
        CPUmodel: req.body.newProduct.CPUmodel,
        hardDiskSize: req.body.newProduct.hardDiskSize,
        computerMemorySize: req.body.newProduct.computerMemorySize,
        screen: req.body.newProduct.screen,
        operatingSystem: req.body.newProduct.operatingSystem,
      },
    });
    const createdProduct = await product.save();
    res.send({
      createdProduct: createdProduct,
    });
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
