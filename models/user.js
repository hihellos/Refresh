const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String, 
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],     
    },

    password: {
      type: String, 
      required: true,
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

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;