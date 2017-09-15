angular.
  module('vacationDiaries').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/diary/:selected', {
          template: '<main-carousel></main-carousel><main-content></main-content>'
        }).
        otherwise('/diary/0');
    }
  ]);
