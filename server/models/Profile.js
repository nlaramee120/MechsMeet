const { Schema, model } = require('mongoose');

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  about: {
    type: String,
    required: false,
    trim: true
  },
  location: {
    type: String,
    required: false,
    trim: true
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  img: {
    type: String,
    required: false,
  },
});

// set up pre-save middleware to create password
profileSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

// const Profile = model('Profile', profileSchema);

// module.exports = Profile;
