/*
 * Utilities
 * - any components that are unlikely to be modified ever again should go here
 */
angular.module('BitWeav').

// Sets the class 'active' on the menu item which linked to the current page
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
}).

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
