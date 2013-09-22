var gui = require('nw.gui');
var main_window = gui.Window.get();

window.onload = function() {
  var less = require('less');
  var fs = require('fs');
  compiled_style_path = "css/.main.compiled-" + new Date().getTime() + ".css";
  fs.readFile('css/main.less', function ( error, data ) {
    less.render(data.toString(), function (e, css) {
      if(e !== null) { console.log("\nLESS error in css/main.less: \n\t"+e); }
      fs.writeFile(compiled_style_path, css, function(err) {
        $('head').append('<link rel="stylesheet" type="text/css" href="' + compiled_style_path + '?v=' + new Date().getTime() + '"/>');
        if(err) { console.log(err); }
      });
    });
  });

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
