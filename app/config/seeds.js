var mongoose = require('./config/database');

var User = require('../models/user');
var Workout = require('../models/workout');

var users = [
  { // 0
    name:   "gamaur",
    email: "gamaur@gamaur.com",
    googleId: "googleId_01"
    // workout: "Activity 1"
  },

  { // 1
    name:   "sarissa",
    email: "sarissa@sarissa.com",
    googleId: "googleId_02"
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
    favorite: true
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
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
    favorite: true
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  }
];

Activity.remove({}, function(err) {
  if (err) console.log(err);
  Activity.create(activities, function(err, activities) {
    if (err) {
      console.log(err);
    } else {
 +      console.log("Database seeded with " + activities.length  + " activities.");
 +      mongoose.disconnect();
 +    }
 +  });
 +});
