(function(){
  "use strict";

  angular
    .module("workoutOfDay")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/templates/home.html",
      })
      .state("workouts", {
        url: "/workouts",
        templateUrl: "/templates/workouts.html",
        controller: "MainController"
      })
      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
