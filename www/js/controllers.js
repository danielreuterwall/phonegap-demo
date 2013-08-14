'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MenuController', ['$location', '$scope', function($location, $scope) {
  	$scope.slideMenu = false;
  	$scope.changeView = function(view) {
        $location.path(view);
        $scope.slideMenu = false;
    }
  }]);