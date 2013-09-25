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
      watched: '@'
    },
    controller: function($scope, $element, $attrs, $transclude) {
      $scope.hover = function(){};
      $scope.showReplyForm = function(){};
    },
    templateUrl: 'partials/templates/message.html',
    replace: true,
  };
});
