const mongoose = require('mongoose');

// options of mooose
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;
const VolunteerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  help: {
    type: Array,
    required: true,
  },
  city: {
    type: String,
    default: 'Brussels'
  },
  otherInformation: {
    type: String
  },
  registeredDate: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'other']
    },
    default: 'male'
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  }
})

module.exports = mongoose.model('volunteer', VolunteerSchema);
