const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homeSchema = new Schema({
  room: {
    type: String,
    required: true,
  },
  image: String,

  questions: [
    {
      name: String,
      cost: Number,
      isFixed: {
        type: Boolean,
        default: false,
      },
    },
  ],

  roomCreated: {
    type: Date,
    default: Date.now,
  },

  // presets: [
  //   {
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     image: String,

  //     questions: [
  //       {
  //         name: String,
  //         cost: Number,
  //         isFixed: {
  //           type: Boolean,
  //           default: false
  //         }
  //       }
  //     ]
  //   }
  // ]
});
const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
