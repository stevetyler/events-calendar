import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['entries'],
  filteredEvents: computed('events.[]', function() {
    return this.get('events').filter(e => {
      let formatCurrent = moment(e.get('startDate')).format('YYYY-MM-DD');
      let formatDate = moment(this.get('date')).format('YYYY-MM-DD');

      return formatCurrent === formatDate && !e.get('isNew');
    });
  }),
  displayedDuration: computed('event', 'weekdates', function() {
    let weekdates = this.get('weekDates'); //string
    let eventMoment = moment(this.get('event'));
    let lastWeekDay = weekdates[weekdates.length - 1];
    let lastWeekDayMoment = moment(lastWeekDay);
    // convert string to moment obj
    //moment.duration(end.diff(start));

    debugger;
  })
});
