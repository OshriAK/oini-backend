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
    console.log(req.body);
    const product = new Product({
      name: req.body.name,
      brand: req.body.brand,
      model: req.body.model,
      makat: req.body.makat,
      image: 'req.body.image',
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.countInStock,
      isNewComputer: req.body.isNewComputer,
      detail: {
        CPUmodel: req.body.CPUmodel,
        hardDiskSize: req.body.hardDiskSize,
        computerMemorySize: req.body.computerMemorySize,
        screen: req.body.screen,
        operatingSystem: req.body.operatingSystem,
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
