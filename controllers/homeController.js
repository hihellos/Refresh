const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findSeededRooms: function (req, res) {
    db.Preset.find({})
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // db.users.findOneAndUpdate({_id: ObjectId("5f7612db740410124c9c6058")}, { $push: {rooms:"5f7614f49a08314b0c4e6ccd"}})

  saveUserRooms: function (req, res) {
    db.User.updateOne({ _id: req.params.id }, { $set: { rooms: [] } })
      .then((res) => {
        db.Home.create(req.body)
          .then((res) => {
            res.map((e) => {
              db.User.findOneAndUpdate(
                { _id: req.params.id },
                { $push: { rooms: e._id } },
                { new: true }
              )
                .then((res) => console.log("Successfully Updated"))
                .catch((err) => console.log("Error Message", err));
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  },

  // create: function (req, res) {
  //   db.Home.create(req.body)
  //     .then(({ _id }) =>
  //       db.User.findOneAndUpdate(
  //         { _id: req.params.id },
  //         { $push: { rooms: _id } },
  //         { new: true }
  //       )
  //     )
  //     .then((dbHome) => {
  //       res.json(dbHome);
  //     })
  //     .catch((err) => res.status(422).json(err));
  // },

  addTask: function (req, res) {
    console.log("req.body ", req.body.text);
    db.Home.updateOne(
      { _id: req.params.id }, //where
      { $push: { tasks: {taskName: req.body.text} }} //what
    )
    .then(res => {
      console.log("result: ", res)
      res.json(res)
    })
    .catch(res => {
      console.log("error ", res)
      res.json(res)
    })
  },

  deleteTask: function(req, res) {
    console.log("req.params.id", req.params.id)
    console.log("req.body", req.body)
    db.Home.updateOne(
      { _id: req.params.id }, //where
      { $pull: {tasks: {taskName: req.body.task}} } //what
    )
    .then(res => {
      console.log("result: ", res)
      // res.json(res)
    })
    .catch(res => {
      console.log("error ", res)
      // res.json(res)
    })
  }
  
};
