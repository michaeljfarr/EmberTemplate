import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('index', { path: '/' });
  this.route('login');
  this.route('appointments');
  this.resource('appointment', { path: '/appointments/:appointment_id' });
  this.resource('benefit', { path: '/benefits/:benefit_id' });
});

export default Router.map(function() {});
