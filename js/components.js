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
      $scope.showControls = false;

      $scope.expand = function($event){
        $scope.expanded = !$scope.expanded;
        $event.stopPropagation();
      }
      $scope.profileCard = function($event) {
        $scope.showingProfileCard = !$scope.showingProfileCard;
        $event.stopPropagation();
      }
      $scope.composeReply = function($event){
        $scope.expand($event);
      }
      $scope.favourite = function($event){
        $event.stopPropagation();
      }
      $scope.share = function($event){
        $event.stopPropagation();
      }
      $scope.sendReply = function(replyContent){}
    },
    templateUrl: 'partials/templates/message.html',
    replace: true,
  };
});
