// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  var controller;

  controller = function(root, scope, sce) {
    return root.$watch('alert', function(alert) {
      if (alert) {
        console.log(alert);
        scope.level = alert.level;
        return scope.msg = sce.trustAsHtml(alert.msg);
      }
    });
  };

  angular.module('wordsApp').directive('alert', function() {
    return {
      templateUrl: 'views/directives/alert.html',
      replace: true,
      restrict: 'E',
      scope: true,
      controller: ['$rootScope', '$scope', '$sce', controller]
    };
  });

}).call(this);
