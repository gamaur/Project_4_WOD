(function() {
  "use strict";

  angular
    .module('workoutOfDay', ['ui.router', 'ngAnimate'])
    .config(function($httpProvider){

      $httpProvider.interceptors.push('authInterceptor');
    });
})();
