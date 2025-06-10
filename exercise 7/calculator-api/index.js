const express = require('express');
const app = express();
const port = 3000;

const calculatorRoutes = require('./routes/calculatorRoutes');
app.use(express.static('public'));
app.use('/calculator', calculatorRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Calculator API</h1>');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Calculator API running at http://localhost:${port}`);
  });
}

module.exports = app;
