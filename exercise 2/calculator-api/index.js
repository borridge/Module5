const express = require('express');
const app = express();
const port = 3000;

// Optional: serve static files if you have a front-end
app.use(express.static('public'));

// Landing page route (root)
app.get('/', (req, res) => {
  res.send(`
    <h1>🧮 Welcome to the Calculator API</h1>
    <p>Use the following routes:</p>
    <ul>
      <li><a href="/calculator/add?num1=10&num2=5">/calculator/add?num1=10&num2=5</a></li>
      <li><a href="/calculator/subtract?num1=10&num2=5">/calculator/subtract?num1=10&num2=5</a></li>
      <li><a href="/calculator/multiply?num1=10&num2=5">/calculator/multiply?num1=10&num2=5</a></li>
      <li><a href="/calculator/divide?num1=10&num2=5">/calculator/divide?num1=10&num2=5</a></li>
    </ul>
  `);
});

// Load the calculator routes
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});
