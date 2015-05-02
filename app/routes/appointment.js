import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   	return Ember.RSVP.hash(
   	{
	  appointment: this.appointmentsAdapter.find(params.appointment_id),
	  appointments: this.appointmentsAdapter.list()
	}).then(
	function(values) {
	    return {
		  appointment: values.appointment, // => postsJSON
		  appointments: values.appointments.appointments // => commentsJSON
		  	};
	});
  }
});

