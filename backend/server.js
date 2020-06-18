const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true }, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log('MongoDB connected successfully');
  }
});
// const connection = mongoose.connection;
// connection.once('open')

app.use(cors());
app.use(express.json());

const excercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises', excercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is live @${port}`);
})
