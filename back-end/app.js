require('dotenv').config();
const express = require('express');

const joiErrorHandler = require('./middlewares/joiErrorHandler');
const { categoryRouter } = require('./routes/category.routes');
const { itemRouter } = require('./routes/item.routes');
const { userRouter } = require('./routes/user.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/user', userRouter);

app.use('/category', categoryRouter);

app.use('/item', itemRouter);

app.use(joiErrorHandler);

module.exports = app;
