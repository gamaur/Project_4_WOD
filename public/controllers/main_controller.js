(function() {
  "use strict";

    angular
      .module("workoutOfDay")
      .controller("MainController", MainController);

    MainController.$inject = ["$log", "workoutDataService"];

    function MainController($log, workoutDataService) {
      var vm = this;
      vm.workouts = workoutDataService

      // vm.workouts = [
      //   {
      //     title: "workout 1",
      //     warm_up: "12 minutes",
      //     rounds: 4,
      //     set_length: "8 minutes",
      //     medium_weights: false,
      //     heavy_weights: true,
      //     jumprope: true,
      //     resistance_bands: true,
      //     kettle_ball: false,
      //     slam_ball: false,
      //     ab_mat: false,
      //     summary: "get out there and run",
      //     workout_date: new Date(2016, 1, 1),
      //     favorite: false,
      //     fave_counter: 3,
      //     comments: ""
      //   },
      //   {
      //     title: "workout 2",
      //     warm_up: "10 minutes",
      //     rounds: 4,
      //     set_length: "6 minutes",
      //     medium_weights: false,
      //     heavy_weights: true,
      //     jumprope: true,
      //     resistance_bands: true,
      //     kettle_ball: false,
      //     slam_ball: false,
      //     ab_mat: false,
      //     summary: "get out there and run",
      //     workout_date: new Date(2016, 1, 2),
      //     favorite: false,
      //     fave_counter: 5,
      //     comments: ""
      //   },
      //   {
      //     title: "workout 3",
      //     warm_up: "6 minutes",
      //     rounds: 4,
      //     set_length: "4 minutes",
      //     medium_weights: false,
      //     heavy_weights: true,
      //     jumprope: true,
      //     resistance_bands: true,
      //     kettle_ball: false,
      //     slam_ball: false,
      //     ab_mat: false,
      //     summary: "get out there and run",
      //     workout_date: new Date(2016, 1, 3),
      //     favorite: false,
      //     fave_counter: 10,
      //     comments: ""
      //   }
      // ];

// vm.addWorkout = addWorkout;
// vm.addFavCount = addFavCount;

      // function addWorkout(){
      //   vm.workouts.push(
      //     {
      //       title: vm.title,
      //       warm_up: vm.warm_up,
      //       rounds: vm.rounds,
      //       set_length: vm.set_length,
      //       medium_weights: false,
      //       heavy_weights: false,
      //       jumprope: false,
      //       resistance_bands: false,
      //       kettle_ball: false,
      //       slam_ball: false,
      //       ab_mat: false,
      //       summary: vm.summary,
      //       workout_date: new Date,
      //       favorite: false,
      //       fav_counter: 0,
      //       comments: [
      //       {author: "Theo", body: "This workout kicked my ass!"},
      //       {author: "Linus", body: "This workout can get a repetitive."}
      //       ]
      //       }
      //     );
      //   vm.title = "";
      //   vm.warm_up = "";
      //   vm.rounds = "";
      //   vm.set_length = "";
      //   vm.summary = "";
      // };

     //  function addFavCount(workout){
     //    // $log.log("click");
     //    workout.favorite = !workout.favorite;
     //    if (workout.favorite === true){
     //      (workout.fav_counter +=1)
     //    } else {
     //      (workout.fav_counter -=1)
     //   };
     // };

    };

  })();
