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

module.exports = {
  index: index,
  show:  show
};
