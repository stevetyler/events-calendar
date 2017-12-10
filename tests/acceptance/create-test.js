import { test } from 'qunit';
import moduleForAcceptance from 'events-calendar/tests/helpers/module-for-acceptance';
//import moment from 'moment';

moduleForAcceptance('Acceptance | create');

test('visiting /create-test', function(assert) {
  // let mondaysEvent = server.create('event', {
  //   startDate: moment().isoWeekday(1),
  //   endDate: moment().isoWeekday(1).add(2, 'days'),
  //   teacher: 'Mr Perkins',
  //   subject: '1A Chemistry',
  //   title: 'Exams'
  // });
  // let wednesdaysEvent = server.create('event', {
  //   startDate: moment().isoWeekday(3),
  //   endDate: moment().isoWeekday(3).add(2, 'days'),
  //   teacher: 'Mr Davis',
  //   subject: '1B Physics',
  //   title: 'Exams'
  // });
  //
  // let weekDates = [];
  // for (let i = 1; i <= 7; i++) {
  //   weekDates.push(moment().isoWeekday(i));
  // }

  visit('/events');

  andThen(() => {
    assert.equal(currentURL(), '/events');
    assert.equal(find('h1').text().trim(), 'Events Calendar', 'Correct title');
  });

});
