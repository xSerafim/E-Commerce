require('dotenv').config();
const express = require('express');

const joiErrorHandler = require('./middlewares/joiErrorHandler');
const { adRouter } = require('./routes/ad.routes');
const { categoryRouter } = require('./routes/category.routes');
const { itemRouter } = require('./routes/item.routes');
const { saleRouter } = require('./routes/sale.routes');
const { supplyRouter } = require('./routes/supply.routes');
const { userRouter } = require('./routes/user.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/user', userRouter);

app.use('/category', categoryRouter);

app.use('/item', itemRouter);

app.use('/supply', supplyRouter);

app.use('/ad', adRouter);

app.use('/sale', saleRouter);

app.use(joiErrorHandler);

module.exports = app;
