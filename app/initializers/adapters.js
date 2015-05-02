import AppointmentsAdapter from 'my-msd/adapters/appointments';

export function initialize(container, application) {
  application.register('adapters:appointments', AppointmentsAdapter, { singleton: true });
  application.inject('route', 'appointmentsAdapter', 'adapters:appointments');
}

export default {
  name: 'inject-adapters',
  initialize: initialize
};