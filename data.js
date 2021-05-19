import bcrypt from 'bcryptjs';

export const products = [
  {
    name: 'LENOVO YOGA',
    brand: 'LENOVO',
    model: 'C640',
    makat: '81UE001GUS',
    image: 'images/C640-81UE001GUS.jpg',
    category: 'Computers',
    price: '3490',
    countInStock: 4,
    new: true,
    detail: {
      CPUmodel: 'i7',
      hardDiskSize: '512',
      computerMemorySize: '8',
      screenSize: '13',
      operatingSystem: 'Windows 10 Home',
    },
  },
];

export const users = [
  {
    name: 'Oshri',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
  },
  {
    name: 'Nati',
    email: 'user@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
];
