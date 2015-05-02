// import ajax from 'ic-ajax';
import Ember from 'ember';

var appointmentsArray = [
  {
    id: "1",
    reference: "",
    date: new Date(2015, 4, 4, 10, 30),
    type: "Apply for a new cost",
    subType: "Power disconnection",
    address: "195 Willis St, Te Aro, Wellington",
    serviceCentre: "",
    personMeeting: "Mike Jenkins"
  },
  {
    id: "2",
    reference: "",
    date: new Date(2015, 4, 8, 14, 30),
    type: "Case management",
    subType: "Change in circumstances",
    address: "195 Willis St, Te Aro, Wellington",
    serviceCentre: "",
    personMeeting: "Mike Jenkins"
  },
  {
    id: "3",
    reference: "",
    date: new Date(2015, 5, 5, 12),
    type: "Case management",
    subType: "Job search",
    address: "195 Willis St, Te Aro, Wellington",
    serviceCentre: "",
    personMeeting: "Mike Jenkins"
  }
];

export default appointmentsArray.map(function(item) {
  return Ember.Object.create(item);
});
