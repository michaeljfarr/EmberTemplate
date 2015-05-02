import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  maxPastDate: moment().add(0, 'month'),
  maxFutureDate: moment().add(1, 'month'),
  selectedDates: function() {
    return this.get('appointments').map(
      function(appt) {
        return moment(appt.date);
      }
    );
  }.property('appointments'),
  actions: {
    dateSelected: function() {
      // TODO: update the appointment item to selected, or if there's only 1 go straight to its listing?
      console.log('date selected');
    }
  },
  appointments: Ember.computed.alias('model.appointments'),
  benefits: Ember.computed.alias('model.benefits')
});
