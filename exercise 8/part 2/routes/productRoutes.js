// routes/productRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Proxy route: gets data from Fake Store API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
