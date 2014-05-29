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
