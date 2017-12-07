import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  startDate: attr('date'),
  endDate: attr('date'),
  title: attr('string'),
  teacher: attr('string'),
  subject: attr('string'),

  dayDuration: 3,
});
