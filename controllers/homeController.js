const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  // match GET "/api/home/"
  findSeededRooms: function (req, res) {
    db.Preset.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log("error message: ", err));
  },

  // match POST "/api/home/rooms/:id"
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
                .catch((err) => console.log("error message: ", err));
            });
          })
          .catch((err) => {
            console.log("error message: ", err);
          });
      })
      .catch((err) => console.log("error message: ", err));
  },

  // match PUT "/api/home/tasks/:id"
  addTask: function (req, res) {
    console.log("req.body ", req.body.text);
    db.Home.updateOne(
      { _id: req.params.id },
      { $push: { tasks: {taskName: req.body.text} }}
    )
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      console.log("error message: ", err);
    });
  },

  // match POST "/api/home/tasks/:id"
  deleteTask: function(req, res) {
    console.log("req.params.id", req.params.id);
    console.log("query", req.query);
    console.log('body', req.body);
    db.Home.updateOne(
      { _id: req.params.id },
      { $pull: {tasks: { _id: req.body.id}} }
    )
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      console.log("error message: ", err);
    });
  },

  // match PUT "/api/home/task/:id"
  updateTask: function(req, res) {
    console.log('everything i get', req.params.id, 'is here', req.body)
    db.Home.findOneAndUpdate({ 
      "_id": req.params.id,
      "tasks._id": req.body.taskId },
      { $set: { "tasks.$.isFixed": req.body.isFixed }}
    )
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      console.log("error message: ", err);
    });
  }
  
};
