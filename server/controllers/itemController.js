const Item = require('./../models/ItemModel.js');

module.exports = {
  getItem(req, res) {
    Item.find()
      .then(res => console.log(res))
  },
  postItem(req, res, next) {
    if(req.body.name != null && req.body.name != "" &&
      req.body.description != null && req.body.description != ""){
      Item.create({
        imageURL: req.body.imageURL,
        name: req.body.name,
        description: req.body.description,
      })
      .then(message => res.json(message))
      .catch(err => {
        res.status(500);
        res.json(err);
      });
    } else {
      res.status(400);
      res.json({message:"Please pass name and description"});
    }
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
