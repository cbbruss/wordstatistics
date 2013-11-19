app = angular.module 'wordsApp', ['ngRoute', 'ngTable', 'restangular']

app.config ($routeProvider) ->
  Parse.initialize "zCZ9afoU17xLzheYoVGnUxU85Wvqri3pasbdc0Q9",
                   "m1kKssfW6cek18eL9fa8AS0JR7siPCFPx5NmHDuR"
  $routeProvider
    .when '/',
      templateUrl: 'views/main.html'
      controller: 'MainCtrl'
    .when '/upload',
      templateUrl: 'views/upload.html',
      controller: 'UploadCtrl'
    .when '/files',
      templateUrl: 'views/files.html',
      controller: 'FilesCtrl'
    .when '/segments',
      templateUrl: 'views/segments.html',
      controller: 'SegmentsCtrl'
    .when '/words',
      templateUrl: 'views/words.html',
      controller: 'WordsCtrl'
    .when '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    .otherwise
      redirectTo: '/'
