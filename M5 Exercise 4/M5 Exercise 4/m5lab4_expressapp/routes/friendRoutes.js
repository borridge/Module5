// ===== routes/friendRoutes.js =====
const express = require("express");
const router = express.Router();
const friends = require('../models/friends');

// GET all friends
router.get('/', (req, res) => {
  res.json(friends);
});

// Part 1: Filter by gender and/or starting letter
router.get('/filter', (req, res) => {
  const { gender, letter } = req.query;
  let results = [...friends];

  if (gender) {
    results = results.filter(f => f.gender.toLowerCase() === gender.toLowerCase());
  }

  if (letter) {
    results = results.filter(f => f.name.toLowerCase().startsWith(letter.toLowerCase()));
  }

  if (results.length > 0) {
    res.status(200).json(results);
  } else {
    res.status(404).json({ error: "No matching friends found." });
  }
});

// Part 2: Return limited headers
router.get('/info', (req, res) => {
  const result = {
    'user-agent': req.headers['user-agent'],
    'content-type': req.headers['content-type'] || 'not provided',
    'accept': req.headers['accept']
  };
  res.status(200).json(result);
});

// Part 3: GET friend by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const friend = friends.find(f => f.id === id);

  if (!friend) {
    return res.status(404).json({ error: `Friend with ID ${id} not found.` });
  }

  res.status(200).json(friend);
});

// POST: Add a new friend
router.post('/', (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    return res.status(400).json({ error: 'Friend must include name and gender.' });
  }

  newFriend.id = friends.length + 1;
  friends.push(newFriend);
  res.status(201).json(newFriend);
});

// Part 4: PUT - Update existing friend
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFriend = req.body;

  const index = friends.findIndex(f => f.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Friend with ID ${id} not found.` });
  }

  friends[index] = { ...friends[index], ...updatedFriend };
  res.status(200).json({ message: 'Friend updated successfully', data: friends[index] });
});

module.exports = router;
