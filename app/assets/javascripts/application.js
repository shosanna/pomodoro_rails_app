//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require pomodoro_timer

// for more details see: http://emberjs.com/guides/application/
window.App = Ember.Application.create({
  rootElement: "#ember-app",
  location: "history",
  LOG_TRANSITIONS: true
});


// Debugging
window.a = function(property) {
  var model = d().get("model");

  if (property) {
    return model.get(property);
  } else {
    return model;
  }
};

window.d = function(property) {
  var path = c("application").get("currentPath");

  var controller = c(path.split(".").slice(-1).join(".")) ||
                   c(path.split(".").slice(-2).join("."));

  if (property) {
    return controller.get(property);
  } else {
    return controller
  }
};

window.c = function(name) {
  return App.__container__.lookup("controller:" + name);
};
