require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const itemController = require('./controllers/itemController');

// connects to the database using address stored in .env file
mongoose.connect(process.env.DB, { useNewUrlParser: true }, () => { console.log('DATABASE CONNECTED'); });

const app = express();

// parses incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// handle CORS error
app.use(cors());

app.get('/', itemController.getItem);

app.post('/add', itemController.postItem);

const PORT = 3001;

app.listen(PORT, (error) => {
  console.log(error || `LISTENING ON PORT ${PORT}`);
});
