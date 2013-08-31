/*
 * Does stuff before application startup
 */


/// Compile the LESS CSS in css/main.less
/// (we do this here so the user sees a nicely styled page on startup)
///
var less = require('less');
var fs = require( 'fs' );

fs.readFile( 'css/main.less', function ( error, data ) {
  less.render(data.toString(), function (e, css) {
    if(e !== null) { console.log(e); }
    fs.writeFile("./css/main.compiled.css", css, function(err) {
      if(err) { console.log(err); }
    });
  });
});
