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
  otherwise({redirectTo: '/home'});
}]).
directive('navMenu', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
        currentLink,
        urlMap = {};

    for (var i = 0; i < links.length; i++) {
      var link = angular.element(links[i]);
      urlMap[link.attr('href')] = link;
      if(link.parent('li').hasClass('active')) { currentLink = link; }
    }

    scope.$on('$locationChangeSuccess', function(a,b,c) {
      var pathLink = urlMap["#"+$location.path()];
      if (pathLink !== undefined) {
        if (currentLink !== undefined) {
          currentLink.parent('li').removeClass('active');
        }
        currentLink = pathLink;
        currentLink.parent('li').addClass('active');
      }
    });
  };
});
