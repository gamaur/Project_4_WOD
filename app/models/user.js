var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  googleId: String,
  workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}],
  fav_workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
