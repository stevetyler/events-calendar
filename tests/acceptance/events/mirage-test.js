import { test } from 'qunit';
import moduleForAcceptance from 'events-calendar/tests/helpers/module-for-acceptance';
import moment from 'moment';

moduleForAcceptance('Acceptance | mirage test');

test('visiting /events', function(assert) {
  let weekDates = [];
  let events = [
    {
      startDate: moment().isoWeekday(1),
      endDate: moment().isoWeekday(1).add(2, 'days'),
      title: 'Exams',
      subject: '1A Chemistry',
      teacher: 'Mr Perkins',
      duration: function() {
        let start = moment(this.startDate);
        let end = moment(this.endDate);
        let duration = moment.duration(end.diff(start));
        let dayDuration = duration.asDays();

        return Math.floor(dayDuration) + 1;
      }
    },
    {
      startDate: moment().isoWeekday(3),
      endDate: moment().isoWeekday(3).add(1, 'days'),
      teacher: 'Mr Davis',
      subject: '1B Physics',
      title: 'Exams',
      duration: function() {
        let start = moment(this.startDate);
        let end = moment(this.endDate);
        let duration = moment.duration(end.diff(start));
        let dayDuration = duration.asDays();

        return Math.floor(dayDuration) + 1;
      }
    }
  ];

  for (let i = 1; i <= 7; i++) {
    weekDates.push(moment().isoWeekday(i));
  }

  events.forEach(event => {
    server.create('event', event);
  });

  visit('/events');

  andThen(() => {
    assert.equal(currentURL(), '/events');
    assert.equal(find('h1').text().trim(), 'Events Calendar', 'Correct title');

    weekDates.forEach((date, i) => {
      assert.equal(find(`.week .day:eq(${i}) .day-title h3:eq(0)`).text().trim(), date.format('dddd'), 'correct day in words');
      assert.equal(find(`.week .day:eq(${i}) .day-title h3:eq(1)`).text().trim(), date.format('Do MMM'), 'correct date');
    });

    events.forEach((event, i) => {
      assert.equal(find(`.entry:eq(${i}) span:eq(0)`).text().trim(), `${event.title} (${event.duration()}days)`, 'correct title');
      assert.equal(find(`.entry:eq(${i}) h4`).text().trim(), `${event.subject}`, 'correct subject');
      assert.equal(find(`.entry:eq(${i}) span:eq(1)`).text().trim(), `${event.teacher}`, 'correct teacher');
    });
  });
});
