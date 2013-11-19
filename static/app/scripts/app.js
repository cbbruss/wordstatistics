// Generated by CoffeeScript 1.6.3
(function() {
  var app;

  app = angular.module('wordsApp', ['ngRoute', 'ngTable', 'restangular']);

  app.config(function($routeProvider) {
    Parse.initialize("zCZ9afoU17xLzheYoVGnUxU85Wvqri3pasbdc0Q9", "m1kKssfW6cek18eL9fa8AS0JR7siPCFPx5NmHDuR");
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/upload', {
      templateUrl: 'views/upload.html',
      controller: 'UploadCtrl'
    }).when('/files', {
      templateUrl: 'views/files.html',
      controller: 'FilesCtrl'
    }).when('/segments', {
      templateUrl: 'views/segments.html',
      controller: 'SegmentsCtrl'
    }).when('/words', {
      templateUrl: 'views/words.html',
      controller: 'WordsCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

/*
//@ sourceMappingURL=app.map
*/
