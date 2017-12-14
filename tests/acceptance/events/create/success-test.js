import { test } from 'qunit';
import moduleForAcceptance from 'events-calendar/tests/helpers/module-for-acceptance';
import moment from 'moment';

moduleForAcceptance('Acceptance | success test');

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

    click('.start-date');
    selectChoose('.start-date', 'Saturday');
    click('.end-date');
    selectChoose('.end-date', 'Sunday');
    click('.save');
  });

  andThen(() => {
    assert.equal(find(`.entry:eq(0) span:eq(0)`).text().trim(), 'Test event (2days)', 'Correct title');
    assert.equal(find(`.entry:eq(0) h4`).text().trim(), 'Test subject', 'Correct subject');
    assert.equal(find(`.entry:eq(0) span:eq(1)`).text().trim(), 'Mr Tyler', 'Correct teacher');

    assert.equal(find('form .title').text().trim(), '', 'Title field cleared');
    assert.equal(find('form .subject').text().trim(), '', 'Subject field cleared');
    assert.equal(find('form .teacher').text().trim(), '', 'Teacher field cleared');
  });
});
