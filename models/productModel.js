import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    makat: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    isNewComputer: { type: String, required: true },
    detail: {
      CPUmodel: { type: String, required: true },
      hardDiskSize: { type: String, required: true },
      computerMemorySize: { type: String, required: true },
      screenSize: { type: String, required: true },
      operatingSystem: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
