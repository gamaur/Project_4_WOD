(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('WorkoutsController', WorkoutsController);

    WorkoutsController.$inject = ["$log", "$scope", "$http", "workoutDataService", "userDataService"];

function WorkoutsController($log, $scope, $http, workoutDataService, userDataService){
     var vm = this;

     vm.currentUser = userDataService.user;

     vm.getWorkouts = getWorkouts;

     vm.workouts = workoutDataService.all;

     vm.workout = workoutDataService._id;

     vm.getWorkouts();

     function getWorkouts (){
        workoutDataService.getWorkouts();
        vm.workouts = workoutDataService.all;
     }

    vm.createWorkout = createWorkout;
      vm.addFavCount = addFavCount;

      function createWorkout(){
        workoutDataService.createWorkout(vm.workoutData)
          .success(function(data) {
        $log.log(vm.currentUser._id);
            vm.workouts.push(
              {
                title: vm.workoutData.title,
                warm_up: vm.workoutData.warm_up,
                rounds: vm.workoutData.rounds,
                set_length: vm.workoutData.set_length,
                medium_weights: vm.workoutData.medium_weights,
                heavy_weights: vm.workoutData.heavy_weights,
                jumprope: vm.workoutData.jumprope,
                resistance_bands: vm.workoutData.resistance_bands,
                kettle_ball: vm.workoutData.kettle_ball,
                slam_ball: vm.workoutData.slam_ball,
                ab_mat: vm.workoutData.ab_mat,
                summary: vm.workoutData.summary,
                workout_date: new Date(),
                favorite: false,
                fav_counter: 0,
                comments: []
              }
            );
            vm.workoutData = {};
          });
        // $log.log(vm.workoutData);
      };

      function addFavCount(workout){
        // $log.log("click");
        workout.favorite = !workout.favorite;
        if (workout.favorite === true){
          (workout.fav_counter +=1)
         } else {
           (workout.fav_counter -=1)
         };
      };

      vm.addComment = function addComment(workout, comment){
        $log.log("click add comment");
        if(comment.body) {
          $log.log(vm.workout);
          $log.log(vm.currentUser._id);
          $http.post('/api/workouts/' + workout._id + '/comments',
            {
              body: comment.body,
              author: vm.currentUser._id
            }
          ).then(function(res) {
            workout.comments.push(res.data);
          });
          comment.body = "";
        }
      };
}

})();
