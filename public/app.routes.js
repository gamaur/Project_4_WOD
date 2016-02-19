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
        templateUrl: "/templates/workouts.html",
        controller: "WorkoutsController",
        controllerAs: "vm"
      })
      .state("workouts", {
        url: "/workouts/",
        templateUrl: "/templates/workouts.html",
        controller: "WorkoutsController",
        controllerAs: "vm"
      })

      .state("workout", {
        url: "workouts/{id}",
        templateUrl: "/templates/workout.html",
        controller: "WorkoutsController",
        controllerAs: "vm"
      })

      .state("addWorkout", {
        url: "/add_workout",
        templateUrl: "/templates/add_workout.html",
        controller: "WorkoutsController",
        controllerAs: "vm"
      })

      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      })

      .state("login", {
        url: "/login",
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })

      .state("about", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      });

    $urlRouterProvider.otherwise("/");

  }

})();
