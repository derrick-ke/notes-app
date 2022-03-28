const app = require('./app');
require('dotenv').config({ path: 'config.env' });
require('./db/db');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
