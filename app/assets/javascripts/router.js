App.Router.map(function() {
  this.route("timer", { path: "/timer" });
});

App.TimerRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("task");
  }
})
