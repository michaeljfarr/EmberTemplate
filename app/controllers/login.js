import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
	username: '',
	password: '',
	greeting: function(){
		return 'hi' + this.get('username');
	}.property('username'),

	actions: {
		login: function() {
		ajax({type: 'POST', url: '/api/login', data: {username: this.get('username'), password: this.get('password')}})
		.then(function() {
	      document.location = "/";
	    }, function() {
	      this.set("loginFailed", true);
	    }.bind(this));

//	    this.send('XYZ')
	  },
	   XYZ: function(){

	   }
	}

});
