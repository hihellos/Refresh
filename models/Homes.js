const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homeSchema = new Schema({
  roomName: {
    type: String,
  },
  
  image: {
    type: String,
  },

  tasks: [
    {
      taskName: String,
      id: Number,
      cost: Number,
      isFixed: {
        type: Boolean,
        default: false,
      },
    },
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  roomCreated: {
    type: Date,
    default: Date.now,
  }
});
const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
