import moment from 'moment';

export default [
  {
    id: 1,
    startDate: moment(),
    endDate: moment().add(2, 'day'),
    teacher: 'Mr Tyler',
    subject: 'Maths',
    title: 'arithmetic'
  },
  {
    id: 2,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().add(4, 'day'),
    teacher: 'Mrs Tyler',
    subject: 'English',
    title: 'Shakespeare'
  }
];
