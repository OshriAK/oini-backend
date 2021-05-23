import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String },
    makat: { type: String, required: true, unique: true },
    image: { type: String },
    category: { type: String, required: true },
    price: { type: String, required: true },
    countInStock: { type: String, required: true },
    isNewComputer: { type: String, required: true },
    officialImporter: { type: String, required: true },
    description: { type: String },
    detail: {
      CPUmodel: { type: String },
      hardDiskSize: { type: String },
      computerMemorySize: { type: String },
      screen: { type: String },
      operatingSystem: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
