const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Middleware to set default profile picture
app.use((req, res, next) => {
  req.user = { profilePicture: 'https://imgur.com/a/mT0z8zV' };
  next();
});

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/register', registerRouter);
app.use('/login', loginRouter);

const uploadRouter = require('./routes/upload');

app.use('/upload', uploadRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});