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
        controller: "WorkoutsController",
        controllerAs: "vm"
      })
      .state("workouts", {
        url: "/workouts/{id}",
        templateUrl: "/templates/workouts.html",
        controller: "WorkoutsController",
        controllerAs: "vm"
      })
      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
