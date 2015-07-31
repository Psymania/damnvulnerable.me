/*
 * Return the value of the first cookie with the given name.
 */
document.cookie = 'badValue=a';
var lookupCookie = function(name) {
  var parts = document.cookie.split(/\s*;\s*/);
  var nameEq = name + '=';
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].indexOf(nameEq) == 0) {
      return parts[i].substr(nameEq.length);
    }
  }
};
var payload = lookupCookie('badValue');
// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
  eval(payload);
};