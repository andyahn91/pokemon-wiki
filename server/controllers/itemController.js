const Item = require('./../models/ItemModel.js');

module.exports = {
  getItem(req, res) {
    Item.find()
      .then(res => console.log(res))
  },
  postItem(req, res, next) {
    Item.create({
      imageURL: req.body.imageURL,
      name: req.body.name,
      description: req.body.description,
    })
      .then(message => res.json(message))
      .catch(err => console.log(err));
    next();
  },
  deleteItem(req, res) {
    Item.deleteOne({
      _id: req.body._id
    })
      .then(deletedItem => res.json(deletedItem))
      .then(res => console.log('deleted'))
      .catch(err => res.status(400).send(err));
  },
};
