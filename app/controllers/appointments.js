import Ember from 'ember';

export default Ember.Controller.extend({
  appointments: Ember.computed.alias('model.appointments')
});
