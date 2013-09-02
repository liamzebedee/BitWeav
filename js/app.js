var gui = require('nw.gui');
var main_window = gui.Window.get();
onload = function() {
  main_window.maximize();
  main_window.show();
}


angular.module('BitWeav', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl}).
  when('/read', {templateUrl: 'partials/read.html', controller: ReadCtrl}).
  when('/discover', {templateUrl: 'partials/discover.html', controller: DiscoverCtrl}).
  when('/me', {templateUrl: 'partials/me.html', controller: MeCtrl}).
  when('/settings', {templateUrl: 'partials/settings.html', controller: SettingsCtrl}).
  otherwise({redirectTo: '/read'});
}]);
