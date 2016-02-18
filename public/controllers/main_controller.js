(function() {
  "use strict";

    angular
      .module("workoutOfDay")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
      var vm = this;

      vm.workouts = [
        {
          title: "workout 1",
          warm_up: "12 minutes",
          rounds: 4,
          set_length: "8 minutes",
          medium_weights: false,
          heavy_weights: true,
          jumprope: true,
          resistance_bands: true,
          kettle_ball: false,
          slam_ball: false,
          ab_mat: false,
          summary: "get out there and run",
          image_url: "",
          workout_date: new Date(2016, 1, 1),
          favorite: false,
          comments: ""
        },
        {
          title: "workout 2",
          warm_up: "10 minutes",
          rounds: 4,
          set_length: "6 minutes",
          medium_weights: false,
          heavy_weights: true,
          jumprope: true,
          resistance_bands: true,
          kettle_ball: false,
          slam_ball: false,
          ab_mat: false,
          summary: "get out there and run",
          image_url: "",
          workout_date: new Date(2016, 1, 2),
          favorite: false,
          comments: ""
        },
        {
          title: "workout 3",
          warm_up: "6 minutes",
          rounds: 4,
          set_length: "4 minutes",
          medium_weights: false,
          heavy_weights: true,
          jumprope: true,
          resistance_bands: true,
          kettle_ball: false,
          slam_ball: false,
          ab_mat: false,
          summary: "get out there and run",
          image_url: "",
          workout_date: new Date(2016, 1, 3),
          favorite: false,
          comments: ""
        }
      ];

    };


  })();
