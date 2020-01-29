const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Importing route
const authRoute = require('./routes/auth');
const questionsRoute = require('./routes/questions');

require('dotenv/config');

//CONNECTING TO THE DATABASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to the database');
});

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/forum', questionsRoute);

app.listen(3001, () => console.log('Server is running'));
