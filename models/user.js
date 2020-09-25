const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String, 
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],     
    },
    password: {
      type: String, 
      validate: [
        ({length}) => length >= 6, "Password should be longer than 6 characters"
      ]
    },
    userCreated: {
      type: Date,
      default: Date.now
    },
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;