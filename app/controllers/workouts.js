// Require resource's model(s).
var Workout = require("../models/workout");

//Get all Workouts
var index = function(req, res, next){

  Workout.find({}).populate('comments.author')
      .exec(function(err, workouts){
      if (err) {
        res.send(err);
      }
      res.json(workouts)
    });
  }

//Get One Workout
var show = function(req, res, next){
  var id = req.params.id;
  Workout.findById(id, function(err, workout){
    if (err) {
      res.send(err);
    }
    res.json(workout);
  });
};

//create a workout
var create = function(req, res, next){
  var workout = new Workout();

  workout.title = req.body.title,
  workout.warm_up = req.body.warm_up,
  workout.rounds = req.body.rounds,
  workout.set_length = req.body.set_length,
  workout.medium_weights = req.body.medium_weights,
  workout.heavy_weights = req.body.heavy_weights,
  workout.jumprope = req.body.jumprope,
  workout.resistance_bands = req.body.resistance_bands,
  workout.kettle_ball = req.body.kettle_ball,
  workout.slam_ball = req.body.slam_ball,
  workout.ab_mat = req.body.ab_mat,
  workout.summary = req.body.summary,

  workout.save(function(err, savedWorkout){
    if (err){
      res.send(err)
    }
    console.log("Workout saved")
    res.json(savedWorkout);
  });
};

//Update a Workout
var update = function(req, res, next){
  var id = req.params.id;
  Workout.findById(id, function(err, workout){
    if (err) {
      res.send(err);
    }
    if (req.body.title) workout.title = req.body.title;
    if (req.body.warm_up) workout.warm_up = req.body.warm_up;
    if (req.body.rounds) workout.rounds = req.body.rounds;
    if (req.body.set_length) workout.set_length = req.body.set_length;
    if (req.body.medium_weights) workout.medium_weights = req.body.medium_weights;
    if (req.body.heavy_weights) workout.heavy_weights = req.body.heavy_weights;
    if (req.body.jumprope) workout.jumprope = req.body.jumprope;
    if (req.body.resistance_bands) workout.resistance_bands = req.body.resistance_bands;
    if (req.body.kettle_ball) workout.kettle_ball = req.body.kettle_ball;
    if (req.body.slam_ball) workout.slam_ball = req.body.slam_ball;
    if (req.body.ab_mat) workout.ab_mat = req.body.ab_mat;
    if (req.body.summary) workout.summary = req.body.summary;

    activity.save(function(err, updatedWorkout){
      if (err){
        res.send(err);
      }
      console.log("Workout updated");
      res.json(updatedWorkout);
    });
  });
};

//Delete an Workout
var destroy = function(req, res) {
  var id = req.params.id;
  Workout.remove({"_id" : id}, function(err){
    if (err){
      res.send(err);
    }
    res.json({message: 'Workout deleted'});
  });
};

var createComment = function(req, res) {
  Workout.findById(req.params.id, function(err, workout) {
    workout.comments.push({
      body: req.body.body,
      author: req.body._id
      // author: '5670903aa273ce43d355841d'
    });
    workout.save(function(err) {
      Workout.findById(req.params.id).populate('comments.author').exec(function(err, workout) {
        res.json(workout.comments.pop());
      })
    });
  });
}


module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy,
  createComment: createComment
};
