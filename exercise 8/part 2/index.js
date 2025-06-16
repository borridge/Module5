// index.js
const express = require('express');
const app = express();
const path = require('path');
const productRoutes = require('./routes/productRoutes');

app.use(express.static('public'));
app.use('/api/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
