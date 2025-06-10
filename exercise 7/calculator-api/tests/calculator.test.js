const request = require('supertest');
const app = require('../index'); // Make sure index.js exports the app

describe('Calculator API Tests', () => {
  test('Addition works', async () => {
    const res = await request(app).get('/calculator/add?num1=10&num2=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15);
  });

  test('Subtraction works', async () => {
    const res = await request(app).get('/calculator/subtract?num1=10&num2=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('Multiplication works', async () => {
    const res = await request(app).get('/calculator/multiply?num1=10&num2=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(50);
  });

  test('Division works', async () => {
    const res = await request(app).get('/calculator/divide?num1=10&num2=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  test('Division by zero returns error', async () => {
    const res = await request(app).get('/calculator/divide?num1=10&num2=0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });
});
