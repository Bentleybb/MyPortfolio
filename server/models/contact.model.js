import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  services: [String],
  message: String,
  created: {
    type: Date,
    default: Date.now
  }
});

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Contact', ContactSchema);
