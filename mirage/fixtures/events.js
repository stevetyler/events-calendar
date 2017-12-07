import moment from 'moment';

export default [
  {
    id: 1,
    startDate: moment().subtract(3, 'day'),
    endDate: moment().subtract(3, 'day'),
    teacher: 'Mr Lutman',
    subject: '4A Maths',
    title: 'Exams'
  },
  {
    id: 2,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().add(5, 'day'),
    teacher: 'Mrs Taylor',
    subject: '5B English',
    title: 'Exams'
  },
  {
    id: 3,
    startDate: moment(),
    endDate: moment().add(5, 'day'),
    teacher: 'Mrs Smith',
    subject: '5B Geography',
    title: 'Field Trip'
  }
];
