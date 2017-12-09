import DS from 'ember-data';
import attr from 'ember-data/attr';
import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default DS.Model.extend({
  startDate: attr('date'),
  endDate: attr('date'),
  title: attr('string'),
  teacher: attr('string'),
  subject: attr('string'),
  dayDuration: computed('startDate', 'endDate', function() {
    let start = moment(this.get('startDate'));
    let end = moment(this.get('endDate'));
    let duration = moment.duration(end.diff(start));
    let dayDuration = duration.asDays();

    return Math.floor(dayDuration) + 1;
  })
});
