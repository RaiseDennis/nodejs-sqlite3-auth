const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../models/user');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('profilePicture'), (req, res) => {
  const { username } = req.body;
  const profilePicturePath = `/uploads/${req.file.filename}`;

  db.run('UPDATE users SET profilePicture = ? WHERE username = ?', [profilePicturePath, username], function(err) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.send('Profile picture updated successfully');
  });
});

module.exports = router;