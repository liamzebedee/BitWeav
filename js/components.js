var gui = require('nw.gui');

angular.module('BitWeav').

// Helper to make code look nicer when producing glyphicons
// <icon share></icon>
directive('icon', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<span class="glyphicon"></span>',
    compile: function(element, attrs) {
      var iconName = element[0].attributes[1].name;
      element.addClass("glyphicon-" + iconName);
    }
  }
}).

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
        '<img src="https://sigil.cupcake.io/dave">' +
      '</a>' +
      '<article class="media-body">' +
        '<header>' +
          '<h4 class="media-heading"><a href="#">{{ author }}</a> <small><span>{{ author-id }}</span> <time class="pull-right">{{ timestamp }}</time></small></h4>' +
        '</header>' +
        '<p ng-transclude></p>' +
        '<footer style="display:none" show-on-hover-parent><ul class="controls">' +
          '<li><icon share-alt></icon> Reply</li>' +
          '<li><icon star-empty></icon> Favourite</li>' +
          '<li><icon share></icon> Share</li>' +
        '</ul></footer>' +
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
}).

// <footer style="display:none" show-on-hover-parent>extra controls</footer>
directive('showOnHoverParent', function() {
  return {
    // XXX later we should put an init method here that automatically hides the element
    link: function(scope, element, attrs) {
      element.parent().bind('mouseenter', function() {
        element.show();
      });
      element.parent().bind('mouseleave', function() {
        element.hide();
      });
    }
  };
});

