const express = require('express');
const router = express.Router();

// ADD
router.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.json({ result });
});

// SUBTRACT
router.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 - num2;
  res.json({ result });
});

// MULTIPLY
router.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 * num2;
  res.json({ result });
});

// DIVIDE
router.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  const result = num1 / num2;
  res.json({ result });
});

module.exports = router;
