const axios = require('axios');

const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getAllProducts };
