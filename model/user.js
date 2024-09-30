const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Date: Date,
  Title: String,
  shorttext: String,
  longtext: String,
});

module.exports = mongoose.model('Post', postSchema);
