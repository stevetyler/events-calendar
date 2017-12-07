import moment from 'moment';

export default [
  {
    id: 1,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().subtract(1, 'day'),
    teacher: 'Mr Lutman',
    subject: '4A Maths',
    title: 'Exams'
  },
  {
    id: 2,
    startDate: moment().subtract(2, 'day'),
    endDate: moment().add(1, 'day'),
    teacher: 'Mr Adams',
    subject: '4D Chemistry',
    title: 'Exams'
  },
  {
    id: 5,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().add(5, 'day'),
    teacher: 'Mrs Taylor',
    subject: '5B English',
    title: 'Exams'
  },
  {
    id: 6,
    startDate: moment(),
    endDate: moment().add(5, 'day'),
    teacher: 'Mrs Smith',
    subject: '3C Geography',
    title: 'Field Trip'
  }
];
