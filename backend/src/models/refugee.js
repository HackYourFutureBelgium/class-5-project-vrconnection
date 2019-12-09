import mongoose from 'mongoose';

const refugeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true 
  },
  lastName: {
    type: String,
    required: true 
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'other']
    },
    default :'male'
  },
  age: {
    type: Number,
    required: true,
  },
  help: {
    type: Array,
    required: true,
  },
  phoneNumber: {
    type: Number,
    minlength: 8,
    manlength: 15
  },
  country: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true
  },
  username: {
    type: String,
    lowercase: true,
    required : true,
    trim : true,
    unique : true
  },
  password: {
    type : String,
    required : true,
    trim : true,
  },
  registeredDate: {
    type: Date,
    required: true,
    default : Date.now
  },
  otherInformation: {
    type: String
  },
  profileImage: {
    type: String
  }
});

module.exports = mongoose.model('Refugee', refugeeSchema);
