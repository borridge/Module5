const friends = require('../models/friends');

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
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
};

const getHeaderInfo = (req, res) => {
  const result = {
    'user-agent': req.headers['user-agent'],
    'content-type': req.headers['content-type'] || 'not provided',
    'accept': req.headers['accept']
  };
  res.status(200).json(result);
};

const getFriendById = (req, res) => {
  const id = parseInt(req.params.id);
  const friend = friends.find(f => f.id === id);

  if (!friend) {
    return res.status(404).json({ error: `Friend with ID ${id} not found.` });
  }

  res.status(200).json(friend);
};

const addFriend = (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    return res.status(400).json({ error: 'Friend must include name and gender.' });
  }

  newFriend.id = friends.length + 1;
  friends.push(newFriend);
  res.status(201).json(newFriend);
};

const updateFriend = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFriend = req.body;

  const index = friends.findIndex(f => f.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Friend with ID ${id} not found.` });
  }

  friends[index] = { ...friends[index], ...updatedFriend };
  res.status(200).json({ message: 'Friend updated successfully', data: friends[index] });
};

module.exports = {
  getAllFriends,
  filterFriends,
  getHeaderInfo,
  getFriendById,
  addFriend,
  updateFriend
};
