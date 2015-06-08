App.Router.map(function() {
  this.resource('news', {path: '/'}, function() {
    this.resource('starbuckscarousel', {path:'/'});
    this.resource('friescarousel', {path:'fries'});
    this.resource('gotcarousel', {path:'game-of-thrones'});
    this.resource('applewatchcarousel', {path:'apple-watch'});
  });
  this.resource('news-item', function() {
    this.resource('fries'),
    this.resource('GOT', {path: 'game-of-thrones'}),
    this.resource('starbucks'),
    this.resource('apple-watch')
  });
});
