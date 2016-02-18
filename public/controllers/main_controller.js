(function() {
  "use strict";

    angular
      .module("workoutOfDay")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
      var vm = this;

      vm.text = "Hi";
    }


})();
