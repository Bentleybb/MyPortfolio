import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: 'Name is required'
        },
 firstname: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 lastname: {
    type: String,
    trim: true,
    required: 'Name is required'
    },
 email: {
 type: String,
 trim: true,
 unique: 'Email already exists',
 match: [/.+\@.+\..+/, 'Please fill a valid email address'],
 required: 'Email is required'
 },
 completion: {
    type: Date,
    //default: Date.now
       },

       description: {
        type: String,
        trim: true,
        required: 'descrip is required'
        },
       
 });
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Contact', ContactSchema);
