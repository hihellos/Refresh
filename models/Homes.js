const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    home: {
      type: String,
      required: true
    },
    rooms: [
      // Schema for each item in rooms array
      {
        type: {
          type: String, 
          required: "Please let us know what room this is!",
        },
        projects: {
          name: {
            type: String
          },
          cost: Number,
        },
        maintenence: {
          name: {
            type: String
          },
          cost: Number,
        },
        issues: {
          name: {
            type: String
          },
          cost: Number,
        },
      },
    ],
  }
);

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;