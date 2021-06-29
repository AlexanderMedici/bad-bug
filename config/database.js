const mongoose = require('mongoose');

// Connect to local database
mongoose.connect(process.env.DATABASE_URL,
  { useNewUrlParser: true, useCreateIndex: true,
  useUnifiedTopology: true },

);


// shortcut to mongoose.connection object
const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});