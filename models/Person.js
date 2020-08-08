const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  bio: {
    type: String,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
    enum: ["user", "vendor", "admin"],
    required: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
});

const Person = mongoose.model("person", personSchema);

module.exports = Person;
