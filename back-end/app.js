require('dotenv').config();
const express = require('express');

const joiErrorHandler = require('./middlewares/joiErrorHandler');
const { userRouter } = require('./routes/user.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/user', userRouter);

app.use(joiErrorHandler);

module.exports = app;
