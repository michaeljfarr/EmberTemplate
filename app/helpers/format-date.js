import Ember from 'ember';
import moment from 'moment';

export default Ember.Handlebars.makeBoundHelper(function(date, format) {
  return moment(date).format(format);
});
