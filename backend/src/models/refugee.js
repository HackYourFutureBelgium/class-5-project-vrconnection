import mongoose from 'mongoose';

const refugeeSchema = new mongoose.Schema({
  fullName: {
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
    type: String,
    required: true,
    enum: {
      values: ['shelter', 'healthcare', 'education', 'legal advice']
    },

    default: 'shelter'
  },

  address: {
    phone: {
      type: Number,
      minlength: 8,
      manlength: 15
    },
    email: {
      type:String,
    }
  },

  username: {
    type : String,
    required : true,
    trim : true,
    unique : true
  },

  registeredDate: {
    type: Date,
    required: true,
    default : Date.now
  },

  otherInformation: {
    type: String
  }
});

module.exports = mongoose.model('Refugee', refugeeSchema);
