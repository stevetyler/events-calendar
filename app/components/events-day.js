import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default Ember.Component.extend({
  classNameBindings: ['isCurrentDay'],
  classNames: ['day'],
  mouseEnter() {},
  mouseLeave() {},
  isCurrentDay: computed('date', function() {
    let now = moment().format('YYYY-MM-DD');
    let date = moment(this.get('date')).format('YYYY-MM-DD');

    return now === date ? true : false;
  })
});
