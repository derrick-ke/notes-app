const mongoose = require('mongoose');

const db = process.env.DB_LOCAL;

mongoose
  .connect(db)
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => console.log('Database connection failed'));
