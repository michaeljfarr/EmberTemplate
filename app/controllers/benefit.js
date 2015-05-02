import Ember from 'ember';

export default Ember.Controller.extend({
  benefits: Ember.computed.alias('model.benefits'),
  // benefit: Ember.computed.alias('model.benefit')
});
