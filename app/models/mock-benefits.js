import Ember from 'ember';

var benefitsArray = [
    {
      id: "1",
      type: "Job seeker support",
      nextPaymentAmmount: "240.88",
      nextPaymentDate: "Tuesday 24 April"
    },
    {
      id: "2",
      type: "Unsupported child benefit",
      nextPaymentAmmount: "125.00",
      nextPaymentDate: "Thursday 26 April"
    }
];

//export var benefitsArr = benefitsArray.map(item => Ember.Object.create(item));
export default benefitsArray.map(function(item) {
  return Ember.Object.create(item);
});
