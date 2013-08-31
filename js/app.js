var gui = require('nw.gui');

var main_window = gui.Window.get();

onload = function() {
  main_window.maximize();
  main_window.show();
}

function AppCtrl($scope) {
  'use strict';
  $scope.name = "world";
}
