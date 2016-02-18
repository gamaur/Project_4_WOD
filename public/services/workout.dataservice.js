(function(){
  "use strict";

  angular
    .module("workoutOfDay")
    .factory("workoutDataService", workoutDataService);

  workoutDataService.$inject = ["$http"];

  function workoutDataService($http){

    var workouts= [
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
          workout_date: new Date(2016, 1, 1),
          favorite: false,
          fave_counter: 3,
          comments: [
          {author: "Jo", body: "This workout can get sweaty"}
          ]
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
          workout_date: new Date(2016, 1, 2),
          favorite: false,
          fave_counter: 5,
          comments: [
          {author: "Patrick", body: "My gf liked this workout!"},
          {author: "Andrew", body: "This workout is pretty fun."}
          ]
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
          workout_date: new Date(2016, 1, 3),
          favorite: false,
          fave_counter: 10,
          comments: []
        }
      ];

    return workouts;
  };
})();
