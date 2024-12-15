const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/user');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run('INSERT INTO users (username, password, profilePicture) VALUES (?, ?, ?)', [username, hashedPassword, 'https://imgur.com/a/mT0z8zV'], function(err) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.send('User registered successfully');
  });
});

module.exports = router;