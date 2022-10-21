const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);
const start = async () => {
  try {
    await mongoose.connect(DB);
    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
      /* eslint-enable no-console */
    });
  } catch (error) {
    /* eslint-disable no-console */
    console.error(error);
    process.exit(1);
  }
};

start();
