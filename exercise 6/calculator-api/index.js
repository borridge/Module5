const express = require('express');
const app = express();
const port = 3000;

// Serve static files (calculator.html)
app.use(express.static('public'));

// Landing route
app.get('/', (req, res) => {
  res.send(`
    <h1>🧮 Welcome to the Calculator API</h1>
    <ul>
      <li><a href="/calculator/add?num1=10&num2=5">Add</a></li>
      <li><a href="/calculator/subtract?num1=10&num2=5">Subtract</a></li>
      <li><a href="/calculator/multiply?num1=10&num2=5">Multiply</a></li>
      <li><a href="/calculator/divide?num1=10&num2=5">Divide</a></li>
    </ul>
  `);
});

// Use calculator routes
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

// Export app for testing
module.exports = app;

// Start server only if not in test environment
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Calculator API running at http://localhost:${port}`);
  });
} 
