import moment from 'moment';

export default [
  {
    id: 1,
    startDate: moment(),
    endDate: moment().add(2, 'day'),
    teacher: 'Mr Tyler',
    subject: '4A Maths',
    title: 'Pythagoras Theorem'
  },
  {
    id: 2,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().add(4, 'day'),
    teacher: 'Mrs Tyler',
    subject: '5B English',
    title: 'To Kill A Mockingbird'
  }
];
