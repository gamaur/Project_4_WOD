(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('WorkoutsController', WorkoutsController);

    WorkoutsController.$inject = ["$log", "$scope", "$stateParams", "workoutsDataService"];

    function WorkoutsController($log, $scope, $stateParams, workoutDataService){
      $scope.workout = workoutDataService[$stateParams.id];
    }

})();
