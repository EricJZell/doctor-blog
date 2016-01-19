import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact', function(){
    this.route('phone');
    this.route('email');
  });
  this.route('posts', { path: '/' });
});

export default Router;
