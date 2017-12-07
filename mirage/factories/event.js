import { Factory, faker } from 'ember-cli-mirage';
import moment from 'moment';

let startDate;

export default Factory.extend({
  startDate: () => {
    startDate = faker.date.between(moment().isoWeekday(1), moment().isoWeekday(6));
    return startDate;
  },

  endDate: () => {
    return moment(startDate).add(faker.random.number({ min: 0, max: 3 }), 'day');
  },
});
