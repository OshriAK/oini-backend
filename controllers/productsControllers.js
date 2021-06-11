import expressAsyncHandler from 'express-async-handler';
import { products } from '../data.js';
import { benefits } from '../data.js';
import Product from '../models/productModel.js';

export const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

export const seedProducts = expressAsyncHandler(async (req, res) => {
  // await Product.remove({});
  const createdProducts = await Product.insertMany(products);
  createdProducts.push(await Product.insertMany(benefits));
  res.send({ createdProducts });
});

export const addProduct = expressAsyncHandler(async (req, res) => {
  const product = new Product({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    makat: req.body.makat,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    countInStock: req.body.countInStock,
    isNewComputer: req.body.isNewComputer,
    officialImporter: req.body.officialImporter,
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
});

export const findProductById = expressAsyncHandler(async (req, res) => {
  const currentProduct = await Product.findById(req.params.id);

  if (currentProduct) {
    res.send(currentProduct);
  } else {
    res.status(404).send('Product Not Found');
  }
});
