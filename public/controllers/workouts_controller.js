(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('WorkoutsController', WorkoutsController);

    WorkoutsController.$inject = ["$log", "$scope", "$stateParams", "workoutDataService"];

    function WorkoutsController($log, $scope, $stateParams, workoutDataService){
      $scope.workout = workoutDataService[$stateParams.id];

      $scope.addComment = function(){
        $log.log("click");
        if($scope.body === "") {return;}
        $log.log($scope.workout);
        $scope.workout.comments.push(
          {
            author: "user",
            body: $scope.body
          }
        );
        $scope.body = "";
        };
    }

})();
