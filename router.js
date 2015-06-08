App.Router.map(function() {
  this.resource('news', {path: '/'});
  this.resource('news-item', function() {
    this.resource('fries'),
    this.resource('GOT', {path: 'game-of-thrones'}),
    this.resource('starbucks'),
    this.resource('apple-watch')
  });
});
