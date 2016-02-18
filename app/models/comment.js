var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  body: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  workout: {type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
