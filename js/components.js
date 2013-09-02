/*
 * Vocabulary:
 *  - <message>
 *  - <panel>
 */

angular.module('BitWeav').
// <message author="" reply="" thread="" language="" -starred=false -watched=false></message>
directive('message', function() {
  var directiveDefinitionObject = {
    restrict: 'E',
    replace: true,
    template: '<article>{{ author }}</article>',
    link: function(scope, iElement, iAttrs) {

    }
  };
  return directiveDefinitionObject;
});

/*.
directive('panel', function(){
  return function(scope, iElement, iAttrs) {
    restrict: 'E',
    template: ''
  };
});*/
