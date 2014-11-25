/* jshint evil: true */
(function(exports) {
  var handlebarsLib, testVersion, htmlbars;

  if(window.location.search){
    var params = window.location.search.slice(1).split('&');
    for (var i = 0, l = params.length; i < l; i++) {
      var parts = params[i].split('=');

      if (parts[0] === 'ember') {
        testVersion = parts[1];
      } else if (parts[0] === 'handlebars') {
        handlebarsLib = parts[1];
      } else if (parts[0] === 'htmlbars') {
        htmlbars = parts[1];
      }
    }
  }

  testVersion = testVersion || "http://builds.emberjs.com/canary/ember.prod.js";

  // Canary requires handlebars 2.0
  if (!handlebarsLib && testVersion.indexOf('canary') !== -1) {
    handlebarsLib = "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v2.0.0.js";
  }

  handlebarsLib = handlebarsLib || "js/libs/handlebars-v1.3.0.js";

  console.log('Handlebars: ' + handlebarsLib)
  document.write('<script src="' + handlebarsLib + '"><\/script>');

  if (htmlbars) {
    document.write('<script>EmberENV = { FEATURES: { "ember-htmlbars": true } };</script>');
  }

  // support for v=http://path.to.ember and v=file://
  if(!testVersion.match(/^(file|http)/)) {
    testVersion = 'js/libs/ember.' + testVersion + '.js';
  }
  console.log('Ember: ' + testVersion);
  document.write('<script src="' + testVersion + '"><\/script>');

  exports.testVersion = testVersion;
})(window);
