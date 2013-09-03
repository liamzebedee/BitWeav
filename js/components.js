/*
 * Vocabulary:
 *  - <message>
 *  - <panel>
 */

var gui = require('nw.gui');

angular.module('BitWeav').
// <message author="" reply="" thread="" language="" -starred=false -watched=false></message>
directive('message', function() {
  var definition = {
    restrict: 'E',
    replace: true,
    template: '<article>{{ author }}</article>',
    link: function(scope, iElement, iAttrs) {

    }
  };
  return definition;
}).

directive('autosize', function(){
  return function(scope, iElement, iAttrs) {
    iElement.autosize();
  };
}).

directive('openInBrowser', function() {
  return function(scope, iElement, iAttrs) {
    iElement.bind('click', function(){
      gui.Shell.openExternal(iAttrs['href']);
      return false; // don't open in usual browser
    });
  };
});

/*.
directive('panel', function(){
  return function(scope, iElement, iAttrs) {
    restrict: 'E',
    template: ''
  };
}).
directive('languageSelector')
*/
