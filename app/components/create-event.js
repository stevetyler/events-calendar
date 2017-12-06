import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-event'],
  actions: {
    saveEvent(event) {
      event.preventDefault();

    }
  }
});
