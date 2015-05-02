// import Ember from 'ember';
// import { default as appointmentsArray } from 'my-msd/models/mock-appointments';
// import { default as benefitsArray } from 'my-msd/models/mock-benefits';

// export default Ember.Route.extend({
//   model: function() {
//     // var appointment = return ajax.request('/api/appointment');
//     return {
//       appointments: appointmentsArray,
//       benefits: benefitsArray
//     };
//   }
// });

import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    var appointmentPromise = ajax('/api/appointments').
    then(function(result) {
      return result;
    });
    return appointmentPromise;
  }
});
