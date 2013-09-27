angular.module('BitWeav').

controller('FeedCtrl', ['$scope', function($scope) {
  $scope.messages = [
    {
      content: 'Check out this #awesome message http://google.com',
      author: 'Dave',
      authorId: 2141221124,
      reply: 1242143,
      thread: 1244254321,
      language: 'en',
      starred: false,
      watched: false,
      timestamp: 1237847338,
      messageId: 12321
    },
    {
      content: 'Woot Woot',
      author: 'Liam',
      authorId: 2141221124,
      reply: 1242143,
      thread: 1244254321,
      language: 'en',
      starred: false,
      watched: false,
      timestamp: 1237847338,
      messageId: 32141
    }
  ];
  $scope.scroll = function(){};
}]);
