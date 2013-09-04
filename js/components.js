var gui = require('nw.gui');

angular.module('BitWeav').

// <message author="" author-id="" reply="" thread="" language="" timestamp=x starred=false watched=false>Message content here with #hashtags.</message>
directive('message', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      author: '@',
      reply: '@',
      thread: '@',
      language: '@',
      starred: '@',
      watched: '@'
    },
    template:
    '<div class="message">' +
    '<header></header>' +
    '<article ng-transclude></article>' +
    '<footer></footer>' +
    '</div>',
    replace: true
  };
}).

// <textarea autosize></textarea>
directive('autosize', function(){
  return function(scope, iElement, iAttrs) {
    iElement.autosize();
  };
}).

// <a href="http://" open-in-browser></a>
directive('openInBrowser', function() {
  return function(scope, iElement, iAttrs) {
    iElement.bind('click', function(){
      gui.Shell.openExternal(iAttrs['href']);
      return false; // don't open in BitWeav interface
    });
  };
});
