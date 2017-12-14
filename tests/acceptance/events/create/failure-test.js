import { test } from 'qunit';
import moduleForAcceptance from 'events-calendar/tests/helpers/module-for-acceptance';
import moment from 'moment';

moduleForAcceptance('Acceptance | failure test');

test('visiting /events', function(assert) {
  let weekDates = [];

  for (let i = 1; i <= 7; i++) {
    weekDates.push(moment().isoWeekday(i));
  }

  visit('/events');

  andThen(() => {
    fillIn('form .title', 'Test event');
    fillIn('form .subject', 'Test subject');
    fillIn('form .teacher', 'Mr Tyler');
    click('.save');
  });

  andThen(() => {
    assert.equal(find('.error').text().trim(), 'Please enter missing fields', 'Error shown for blank dates');
    click('.clear');
    //pauseTest();

    fillIn('form .title', 'Test event');
    fillIn('form .subject', 'Test subject');
    fillIn('form .teacher', 'Mr Tyler');
    click('.start-date');
    selectChoose('.start-date', 'Saturday');
    click('.save');
  });
  andThen(() => {
    assert.equal(find('.error').text().trim(), 'Please enter missing fields', 'Error shown for missing end date');
    click('.clear');

    click('.start-date');
    selectChoose('.start-date', 'Saturday');
    click('.end-date');
    selectChoose('.end-date', 'Sunday');

    //pauseTest();
    click('.save');
    //pauseTest();
  });
  andThen(() => {
    assert.equal(find('.error').text().trim(), 'Please enter missing fields', 'Error shown for missing title');
    click('.clear');
  });
});
