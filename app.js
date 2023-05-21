// importing express function
const express = require('express');

//importing controllers function
const {
  readProducts,
  readProductById,
  postProduct,
  putProduct,
  deleteProduct,
} = require('./controllers/products');

// creating an express app
const app = express();

// starting up the server at port number 5000
app.listen(5000, () => console.log('Server up at PORT:5000'));

//  middlewares
app.use(express.json());

// get all products
app.get('/api/products', readProducts);

// get a product
app.get('/api/products/:id', readProductById);

// Post a product
app.post('/api/products', postProduct);

// put a product
app.put('/api/products/:id', putProduct);

// delete a product
app.delete('/api/products/:id', deleteProduct);
