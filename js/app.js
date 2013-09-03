var gui = require('nw.gui');
var main_window = gui.Window.get();
onload = function() {
  main_window.maximize();
  main_window.show();
  //main_window.showDevTools();
}


angular.module('BitWeav', []).
// Configuration.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl}).
  when('/discover', {templateUrl: 'partials/discover.html', controller: DiscoverCtrl}).
  when('/profile', {templateUrl: 'partials/profile.html', controller: MeCtrl}).
  when('/settings', {templateUrl: 'partials/settings.html', controller: SettingsCtrl}).
  when('/intro', {templateUrl: 'partials/intro.html', controller: IntroCtrl}).
  otherwise({redirectTo: '/intro'});
}]);
