(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('UsersController', UsersController);

    UsersController.$inject = ["$log", "$http", "userDataService"];

    function UsersController($log, $http, userDataService){
      var vm = this;


      function getUsers (){
        userDataService.getUsers();
        vm.users = userDataService.all;
      }

      vm.createUser = createUser;

      function createUser(){
        $log.log("click");
        userDataService.createUser(vm.userData)
          .success(function(data) {
            vm.userData = {};
          });
        $log.log(vm.userData);
      };


    }

})();
