import Ember from 'ember';

export default Ember.Controller.extend({
  appointment: Ember.computed.alias('model.appointment'),
  // appointments: Ember.computed.alias('model.appointments')
  // appointments: Ember.computed.filter('model.appointments', (a) => a.get('id') % 2)
});
