'use strict';

const mongoose = require('mongoose');

const BookBought = mongoose.Schema({
  title: {type: String, required: true,  unique: true},
  author: {type: String, required: true},
  content: {type: String, required: true, minlength: 10},
  timestamp: {type: Date , default: () => new Date()},
});

// add vallidation and hooks to schema

module.exports = mongoose.model('book', BookBought);

// add static methods to the model (constructor)
