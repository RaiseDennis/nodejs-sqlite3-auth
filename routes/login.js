const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/user');

router.post('/', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send('Invalid credentials');
    }
    req.user = user;
    res.send('Logged in successfully');
  });
});

module.exports = router;