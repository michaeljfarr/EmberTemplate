// import Ember from 'ember';
// import benefitsArray from 'my-msd/models/mock-benefits';

// export default Ember.Route.extend({
//   model: function(params) {
//     var benefit = benefitsArray.find(function(item) {
//       return item.get('id') === params.benefit_id;
//     });
//     return {
//       benefit: benefit,
//       benefits: benefitsArray
//     };
//   }
// });

import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    var benefitPromise = ajax('/api/benefits').
    then(function(result) {
      return result;
    });
    return benefitPromise;
  }
});
