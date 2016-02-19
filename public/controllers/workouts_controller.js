(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('WorkoutsController', WorkoutsController);

    WorkoutsController.$inject = ["$state", "$log", "$scope", "$http", "workoutDataService", "userDataService", "authService"];

function WorkoutsController($state, $log, $scope, $http, workoutDataService, userDataService, authService){
     var vm = this;

     vm.currentUser = userDataService.user;

     vm.getWorkouts = getWorkouts;

     vm.workouts = workoutDataService.all;

     vm.isLoggedIn = authService.isLoggedIn;

     vm.getWorkouts();
     vm.createWorkout = createWorkout;
     vm.getWorkout = getWorkout;
     vm.addFavCount = addFavCount;

     $log.log(vm.currentUser);

     function getWorkouts (){
        workoutDataService.getWorkouts();
        vm.workouts = workoutDataService.all;
     }

      function createWorkout(){
        // $log.log(vm.workoutData.author);
        workoutDataService.createWorkout(vm.workoutData)
          .success(function(data) {
        // $log.log(vm.currentUser._id);
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
            $state.go('workouts');
          });
        // $log.log(vm.workoutData);
      };

      function getWorkout(id){
        workoutDataService.getWorkout(id).then(function(response){
          vm.workout = response.data;
        // $log.log("workout is " +vm.workout.title);

      }, function(errRes){
          console.error('Error getting workout!', errRes);
      });

        // $log.log("workout is " +vm.workout);

      }

      vm.addComment = function addComment(workout, comment){
        // $log.log("click add comment");
        if(comment.body) {
          // $log.log(vm.workout);
          // $log.log(vm.currentUser._id);
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
      function addFavCount(workout){
        // $log.log("click");
        workout.favorite = !workout.favorite;
        if (workout.favorite === true){
            (workout.fav_counter +=1)
          } else {
            (workout.fav_counter -=1)
          };
        // $http.put('/api/activities/' + activity._id + '/favCount',
        // {
        //   favorite: activity.favorite,
        //   fav_counter: activity.fav_counter
        // }
        // ).then(getActivities);

        };

        //////////////////////////
        //FOR FLOATING FILTERBAR//
        //////////////////////////
        // function sticky_relocate() {
        //     var window_top = $(window).scrollTop();
        //     var div_top = $('#sticky-anchor').offset().top;
        //     if (window_top > div_top) {
        //         $('#sticky').addClass('stick');
        //     } else {
        //         $('#sticky').removeClass('stick');
        //     }
        // }

        // $(function () {
        //     $(window).scroll(sticky_relocate);
        //     sticky_relocate();
        // });
}

})();
