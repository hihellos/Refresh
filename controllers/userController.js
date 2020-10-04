const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .findOne({ _id: req.params.id })
      .populate("rooms")
      .then(dbUser => {
        res.json(dbUser.rooms);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
};
