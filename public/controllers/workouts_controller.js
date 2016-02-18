(function(){
  "use strict";

  angular
    .module('workoutOfDay')
    .controller('WorkoutsController', WorkoutsController);

    WorkoutsController.$inject = ["$log", "$scope", "$http", "workoutDataService"];

function WorkoutsController($log, $scope, $http, activityDataService){
     var vm = this;
     vm.workout= workoutDataService;

    // vm.addComment = addComment;

      // function addComment(){
      //   $log.log("click");
      //   if(vm.comments.body === "") {return;}
      //   $log.log(vm.workout);
      //   vm.workout.comments.push(
      //     {
      //       author: "user",
      //       body: vm.comments.body
      //     }
      //   );
      //   vm.comments.body = "";
      //   };
    }

})();
