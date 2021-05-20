import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    makat: { type: String, required: true, unique: true },
    image: { type: String },
    category: { type: String, required: true },
    price: { type: String, required: true },
    countInStock: { type: String, required: true },
    isNewComputer: { type: String, required: true },
    officialImporter: { type: String, required: true },
    detail: {
      CPUmodel: { type: String, required: true },
      hardDiskSize: { type: String, required: true },
      computerMemorySize: { type: String, required: true },
      screen: { type: String, required: true },
      operatingSystem: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
