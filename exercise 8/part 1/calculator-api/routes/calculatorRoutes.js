const express = require('express');
const router = express.Router();
const calc = require('../lib/calculator');
const log = require('../lib/logger');

router.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = calc.add(num1, num2);
  const id = calc.generateId();
  log(`ID: ${id} | ADD ${num1} + ${num2} = ${result}`);
  res.json({ id, result });
});

router.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = calc.subtract(num1, num2);
  const id = calc.generateId();
  log(`ID: ${id} | SUBTRACT ${num1} - ${num2} = ${result}`);
  res.json({ id, result });
});

router.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = calc.multiply(num1, num2);
  const id = calc.generateId();
  log(`ID: ${id} | MULTIPLY ${num1} * ${num2} = ${result}`);
  res.json({ id, result });
});

router.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const id = calc.generateId();
  try {
    const result = calc.divide(num1, num2);
    log(`ID: ${id} | DIVIDE ${num1} / ${num2} = ${result}`);
    res.json({ id, result });
  } catch (error) {
    log(`ID: ${id} | DIVIDE ERROR: ${error.message}`);
    res.status(400).json({ id, error: error.message });
  }
});

module.exports = router;
