const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
  q_title: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 255
  },
  tags: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  questioner: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  answer: {
    type: String
  },
  comment: {
    type: Object
  },
  upVoteCounter: {
    type: Array
  }
});

module.exports = mongoose.model('Question', questionSchema);
