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
      watched: '@',
      timestamp: '@'
    },
    template:
    '<div class="message">' +
      '<a class="pull-left user-dp" href="#">' +
        '<img class="media-object" src="https://sigil.cupcake.io/dave">' +
      '</a>' +
      '<article class="media-body">' +
        '<header>' +
          '<a href="#"><h4 class="media-heading">{{ author }} <small>{{ author-id }}</small></h4></a>' +
          '<time class="pull-right">{{ timestamp }}</time>' +
        '</header>' +
        '<p ng-transclude></p>' +
        '<footer><div class="controls">' +
          'Reply Watch Star' +
        '</div></footer>' +
      '</article>' +
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
