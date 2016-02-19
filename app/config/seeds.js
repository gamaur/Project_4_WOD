var mongoose = require('./database');

var User = require('../models/user');
var Workout = require('../models/workout');
var Comments = require('../models/comment');

var users = [
  { // 0
    name:   "gamaur",
    email: "gamaur@gamaur.com",
    password: "abc1103"
    // workout: "Activity 1"
  },

  { // 1
    name:   "sarissa",
    email: "sarissa@sarissa.com",
    password: "abc1104"
    // workout: "Activity 2"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
  });
});

var workouts = [
  { // 0
    title: "MaxOut",
    warm_up: "6 minutes",
    rounds: 2,
    set_length: "7 minutes"
    medium_weights: true,
    heavy_weights: true,
    jumprope: false,
    resistance_bands: false,
    kettle_ball: false,
    slam_ball: false,
    ab_mat: false,

    summary: "Chest Press, Rows - ES, Squats, Heartbeats, Chest Flys, Reverse Flys + curls, end with Abs",
    // image_url: ,
    activity_date: 2016-02-17,
    favorite: false
    // comments: [{author: "Viv", body: "This activity can get a little boring."}]
  },

  { // 1
    title: "Dirty Dozen",
    warm_up: "6 minutes",
    rounds: 2,
    set_length: "12 minutes",
    medium_weights: false,
    heavy_weights: true,
    jumprope: false,
    resistance_bands: false,
    kettle_ball: false,
    slam_ball: false,
    ab_mat: false,

    summary: "Chest Press, Heartbeats, Jack Knives, Crunches, Rows (ES), Power Squats, Side Bends (ES), Dead Lifts, Leg Lifts, Bicycles",
    // image_url: ,
    activity_date: 2015-12-12,
    favorite: false
    // comments: [{author: "Lauren", body: "I like this workout!"}]
  }
];

Workout.remove({}, function(err) {
  if (err) console.log(err);
  Workout.create(workouts, function(err, workouts`) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + workouts.length  + " workouts.");
      mongoose.disconnect();
    }
  });
});
