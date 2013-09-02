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
});
