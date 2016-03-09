(function(){
  "use strict";

  angular
    .module("workoutOfDay")
    .factory("workoutDataService", workoutDataService);

  workoutDataService.$inject = ["$http"];

  function workoutDataService($http){
    var workouts = {};

    workouts.all = [];

    var activity = {};

    //Get All Workouts
    workouts.getWorkouts = function() {
      return $http.get('/api/workouts/')
      // .then(function(response) {
      //   workouts.all = response.data;
      // }, function(errRes) {
      //   console.error('Error getting workouts!', errRes);
      // });
    };

    //Create an workout
    workouts.createWorkout = function(workoutData) {
        return $http.post('/api/workouts/new', workoutData)
    };

    //Get a single workout
    workouts.getWorkout = function(id) {
         return $http.get('/api/workouts/' +id);
    };

    //Update a workout
    workouts.updateWorkout = function(id, workoutData) {
         return $http.put('/api/workouts/' + id, workoutData);
    };

    //Delete a workout
    workouts.deleteWorkout = function(id) {
        return $http.delete('/api/workouts/' +id);
    };

    return workouts;
  };
})();
