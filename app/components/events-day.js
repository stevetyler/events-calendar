import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['day'],
  click() {
    this.toggleProperty('isAddEventVisible');
    console.log('clicked!', this.get('isAddEventVisible'));
  },
  actions: {
    addDescription() {

    }
  }
});
