// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  var controller;

  controller = function(scope, Alert) {
    return scope.resetPassword = function() {
      if (!scope.email) {
        return;
      }
      return Parse.User.requestPasswordReset(scope.email, {
        success: function() {
          return Alert.success("An email has been sent to you with a reset link.");
        },
        error: function(error) {
          console.error("Error: " + error.code + " " + error.message);
          return Alert.error("An error occured, please, try again later");
        }
      });
    };
  };

  angular.module('wordsApp').controller('PasswordresetCtrl', ['$scope', 'Alert', controller]);

}).call(this);
