const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: 30,
    required: true,
    validate(value) {
      if (!validator.isEmail(value))
        throw new Error("Email is invalid");
    }
  },
  age: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password'))
        throw new Error(`You password can not contain ${value}`)
    }
  },

});

module.exports = User;
