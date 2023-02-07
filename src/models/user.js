const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema;

const userSchema = new schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Enter an email address."],
    unique: [true, "That email address is taken."],
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email address."],
  },
  username: {
    type: String,
    required: [true, "Enter a username."],
    unique: [true, "That username is taken."],
    lowercase: true,
    validate: [
      validator.isAlphanumeric,
      "Usernames may only have letters and numbers.",
    ],
  },
  password: {
    type: String,
    required: [true, "Enter a password."],
    minLength: [8, "Password should be at least eight characters"],
  },
  name: {
    firstname: {
      type: String,
      required: [true, "Enter a firstname."],
      validate: [validator.isAlpha, "First Name may only have letters."],
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  address: {
    city: String,
    street: String,
    number: Number,
    zipcode: String,
    geolocation: {
      lat: String,
      long: String,
    },
  },
  phone: String,
});

module.exports = mongoose.model("user", userSchema);
