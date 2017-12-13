import Ember from 'ember';
import moment from 'moment';
const { inject: { service }, computed } = Ember;

export default Ember.Component.extend({
  init(...args) {
    this._super(...args);
    this.newEvent = this.get('store').createRecord('event');
  },
  classNames: ['create-event'],
  filteredWeekDates: computed('selectedStartDate', function() {
    let selectedStartDate = this.get('selectedStartDate');

    if (selectedStartDate) {
      let weekDates = this.get('weekDates');
      let selectedDateIndex = weekDates.indexOf(selectedStartDate);

      return weekDates.slice(selectedDateIndex, weekDates.length);
    }
  }),
  hasError: false,
  store: service(),

  actions: {
    clearSelections() {
      this.set('selectedStartDate', null);
      this.set('selectedEndDate', null);
      this.set('hasError', false);
    },
    saveEvent() {
      if (!this.get('selectedStartDate') || !this.get('selectedEndDate')) {
        this.set('hasError', true);
        return;
      }
      this.get('newEvent').save().then(() => {
        const cleanRecord = this.get('store').createRecord('event');

        this.setProperties({
          newEvent: cleanRecord,
          selectedStartDate: null,
          selectedEndDate: null
        });
      });
    },
    setDate(type, date) {
      this.set(`selected${type.classify()}`, date);
      this.set(`newEvent.${type}`, moment(date).toDate());
    }
  }
});
