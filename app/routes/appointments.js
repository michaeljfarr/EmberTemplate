//import { default as appointmentsArray } from 'my-msd/models/mock-appointments';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  /*model: function() {
    return {
      appointments: appointmentsArray
    };
  }*/

   model: function() {
   	return this.get("appointmentsAdapter").list();
  }

});
