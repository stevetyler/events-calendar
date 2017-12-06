import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  startDate: attr('date'),
  endDate: attr('date'),
  dayDuration: attr('number'),
  description: attr('string')
});
