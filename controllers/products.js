// importing products data
const products = require('../data/products.json');

// importing utils function
const { writeToFile } = require('../utils');

// GET /api/products
const readProducts = (req, res) => {
  res.status(200).json(products);
};

// GET /api/products/:id
const readProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);
  // if no product of the id exists
  product
    ? res.status(200).json(product)
    : res.status(404).json({ message: 'Product Not Found' });
};

// POST /api/products
const postProduct = (req, res) => {
  const { name, description, price } = req.body;
  const id = (Number(products[products.length - 1].id) + 1).toString();
  const newProduct = { id, name, description, price };
  const newProducts = [...products];
  newProducts.push(newProduct);

  // writing to the file
  writeToFile('./data/products.json', newProducts);

  res.json(newProduct);
};

// PUT /api/products/:id
const putProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product Not Found' });
  }
  const index = products.indexOf(product);
  const updatedProduct = {
    id: product.id,
    name: name || product.name,
    description: description || product.description,
    price: price || product.price,
  };
  const updatedProducts = [...products];
  updatedProducts[index] = updatedProduct;

  // writing to the file
  writeToFile('./data/products.json', updatedProducts);
  res.json(updatedProducts);
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product Not Found' });
  }
  const updatedProducts = products.filter((p) => p.id !== id);

  // writing to the file
  writeToFile('./data/products.json', updatedProducts);
  res.json(updatedProducts);
};
module.exports = {
  readProducts,
  readProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
