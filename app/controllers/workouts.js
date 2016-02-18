// Require resource's model(s).
var Workout = require("../models/workout");

var index = function(req, res, next){

  Workout.find({}, function(error, workouts){
    res.render('workouts/index', {workouts: workouts});
  });
};

var show = function(req, res, next){
  Workout.findById(req.params.id, function(error, workout){
    if (error) res.json({message: 'Could not find workout because ' + error});
    res.render('workouts/show', {workout: workout});
  });
};

var create = function(req, res, next){
  var workout = new Workout();

  workout.title = req.body.title;

  workout.save(function(err, savedWorkout){
    if (err){
      res.send(err)
    }
    console.log("Workout saved")
    res.json(savedWorkout);
  });
};

module.exports = {
  index: index,
  show:  show,
  create: create
};
