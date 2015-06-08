App.ApplicationController = Ember.Controller.extend({
  showingSocialPanel: false,
  actions: {
    showSocial: function() {
      alert('showing')
      this.set('showingSocialPanel', true);
    },
    hideSocial: function() {
      this.set('showingSocialPanel', false);
    }
  }
});
