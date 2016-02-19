(function() {
  "use strict";

  angular
    .module('workoutOfDay', ['ui.router'])
    .config(function($httpProvider){

      $httpProvider.interceptors.push('authInterceptor');
    });
})();
