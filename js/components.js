var gui = require('nw.gui');

angular.module('BitWeav').

directive('message', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      author: '@',
      authorId: '@',
      reply: '@',
      thread: '@',
      timestamp: '@',
      language: '@',
      starred: '@',
      watched: '@',
      messageId: '@'
    },
    controller: function($scope, $element, $attrs, $transclude) {
      $scope.hover = function(){};
      $scope.expand = function($event){
        $scope.expanded = !$scope.expanded;
        $event.stopPropagation();
      };
    },
    templateUrl: 'partials/templates/message.html',
    replace: true,
  };
});
