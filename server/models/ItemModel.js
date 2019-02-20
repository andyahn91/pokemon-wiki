const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  imageURL: String,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
