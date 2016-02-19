(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('UsersController', UsersController);

    UsersController.$inject = ["$log", "$http", "userDataService",  "authService", "$state"];

    function UsersController($log, $http, userDataService, authService, $state){
      var vm = this;

      vm.currentUser = authService.currentUser


      vm.currentUser = authService.currentUser;
      vm.createUser = createUser;

      function createUser(){
        $log.log("click");
        userDataService.createUser(vm.userData)
          .success(function(data) {
            vm.userData = {};
          });
        $log.log(vm.userData);
        $state.go('home')
      };


    }

})();
