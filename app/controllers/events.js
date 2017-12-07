import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default Ember.Controller.extend({
  currentDate: Date.now(),
  startDate: moment().isoWeekday(1),
  endDate: moment().isoWeekday(7),

  weekDates: computed('startDate', 'endDate', function() {
    let dateArray = [];
    let startDate = this.get('startDate');
    let endDate = this.get('endDate');
    while (startDate <= endDate) {
      dateArray.push( moment(startDate).format('YYYY-MM-DD') );
      startDate = moment(startDate).add(1, 'days');
    }
    return dateArray;
  }),
  isCreateEventVisible: false
});
