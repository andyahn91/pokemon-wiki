require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const itemController = require('./controllers/itemController')

mongoose.connect(process.env.DB, { useNewUrlParser: true }, () => { console.log('DATABASE CONNECTED')});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const Item = require('./models/ItemModel');

app.get('/', (req, res) => {
  Item.find()
    .then(data => res.json(data))
})

app.post('/add', itemController.postItem);

const PORT = 3001;

app.listen(PORT, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.log(`LISTENING ON PORT ${PORT}`);
  }
});
