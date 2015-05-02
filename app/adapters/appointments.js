import Ember from 'ember';
import ajax from 'ic-ajax';
var cache = {}
export default Ember.Object.extend({
  list: function() {
    if(cache["appointments"])    {
      return Ember.RSVP.resolve(cache["appointments"]);
    }
    return ajax('/api/appointments').then(function(record)      {
        cache["appointments"] = record;
        return record;
      });
  },
  find: function(id)  {
    return this.list().then(function(appointments) {
      var appointment= appointments.appointments.findBy("id", id);
      return appointment;
    });
  }
});