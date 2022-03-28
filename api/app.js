const express = require('express');
const cors = require('cors');
const noteRoute = require('./routes/noteRoute');

const app = express();

app.use(express.json());

// const corsOptions = {
//   origin: '*',
//   credentials: true,
//   optionSuccessStatus: 200,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
// };

// app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Accept, Authorization, Origin'
  );
  if (req.methods === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, DELETE, PUT, DELETE'
    );
  }
  next();j
});

//Create routes for the notes
app.use('/api/note', noteRoute);

module.exports = app;
