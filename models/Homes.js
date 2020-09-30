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

  roomCreated: {
    type: Date,
    default: Date.now,
  },

  presets: [    
    {
      roomName: {
        type: String,
        required: true
      },
      image: String,

      tasks: [
        {
          taskName: String,
          id: Number,
          cost: Number,
          isFixed: {
            type: Boolean,
            default: false
          }
        }
      ]
    }
  ]
});
const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
