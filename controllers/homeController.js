const db = require("../models");

module.exports = {
  
  findSeededRooms: function(req, res) {
    db.Preset
      .find({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // findById: function(req, res) {
  //   db.Home
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  
  make: function(req, res) {
    db.Home.create(req.body)
      // .then(({_id}) => db.User.findOneAndUpdate({ _id: req.params.id}, { $push: { rooms: _id } }, { new: true }))
      .then(dbHome => {
        res.json(dbHome);
      })
      .catch(err => res.status(422).json(err));
  },
  
  create: function(req, res) {
    db.Home.create(req.body)
      .then(({_id}) => db.User.findOneAndUpdate({ _id: req.params.id}, { $push: { rooms: _id } }, { new: true }))
      .then(dbHome => {
        res.json(dbHome);
      })
      .catch(err => res.status(422).json(err));
  },

  // update: function(req, res) {
  //   db.Home
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  
  // remove: function(req, res) {
  //   db.Home
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }

};
