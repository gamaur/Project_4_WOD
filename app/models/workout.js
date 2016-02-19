var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
    body: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 });

var workoutSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  warm_up: String,
  rounds: String,
  set_length: String,
  medium_weights: Boolean,
  heavy_weights: Boolean,
  jumprope: Boolean,
  resistance_bands: Boolean,
  kettle_ball: Boolean,
  slam_ball: Boolean,
  ab_mat: Boolean,
  summary: String,
  workout_date: {type: Date, default: Date.now},
  favorite: Boolean,
  fav_counter: {type: Number, default: 0},
  comments: [commentSchema]
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
