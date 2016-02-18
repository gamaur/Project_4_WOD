var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var workoutSchema = new mongoose.Schema({
  title: String,
  warm_up: String,
  rounds: Number,
  set_length: String,
  medium_weights: Boolean,
  heavy_weights: Boolean,
  jumprope: Boolean,
  resistance_bands: Boolean,
  kettle_ball: Boolean,
  slam_ball: Boolean,
  ab_mat: Boolean,
  summary: String,
  image_url: String,
  activity_date: Date,
  favorite: Boolean,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
