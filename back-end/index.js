const app = require('./app');

app.listen(process.env.PORT, () =>
  console.log(`listen in ${process.env.PORT}`)
);
