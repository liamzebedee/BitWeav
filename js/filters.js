angular.module('BitWeav').

filter('autolink', function() {
  // Modified from original AngularJS linky filter.
  // This is the single most beautiful piece of code I have ever written.
  // In something so complex lies the beautiful knowledge that you understand it.
  // This will match URLS of protocols HTTP, HTTPS, FTP, Tent.io, Mailto, and Magnet.
  var /*THE_GOD_EXPRESSION*/URL_HASHTAG_REGEX = /(((tent\+https?|ftp|https?|irc):\/\/|bitcoin|magnet:\|mailto:)|[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]|\S*#(?:\[[^\]]+\]|\S+)/g;
  //var /*THE_GOD_EXPRESSION*/URL_HASHTAG_REGEX = /(((tent\+https?|ftp|https?|irc):\/\/|bitcoin|magnet:\?|mailto:)|[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/;

  return function(text, target) {
    var html = text;
    matches = text.match(URL_HASHTAG_REGEX) || [];
    for(var i = 0; i < matches.length; i++) {
      var match = matches[i];
      // Hashtag
      if(match[0] === '#') {
        // XXX this is bad hardcoding URLs into variables. probably use a service
        html = html.replace(match, "<a href='/discover/hashtag/" + match + "'>"+match+"</a>");
      }
      // Link
      else {
        html = html.replace(match, "<a open-in-browser href='" + match + "'>"+match+"</a>");
      }
    }
    return html;
  };
});
