// ===== index.js =====
const express = require("express");
const friendRoutes = require('./routes/friendRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', express.static('public'));
app.use('/friends', friendRoutes);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
