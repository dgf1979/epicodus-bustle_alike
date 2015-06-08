App.NewsController = Ember.Controller.extend({
  arrowsDisplayed: false,
  actions: {
    showArrows: function() {
      this.set('arrowsDisplayed', true);
    },
    hideArrows: function() {
      this.set('arrowsDisplayed', false);
    }
  }
});
