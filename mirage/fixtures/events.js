import moment from 'moment';

export default [
  {
    id: 1,
    startDate: moment(),
    endDate: moment().add(1, 'day'),
    teacher: 'Mr Perkins',
    subject: '1A Chemistry',
    title: 'Exams'
  },
  {
    id: 2,
    startDate: moment(),
    endDate: moment().add(3, 'day'),
    teacher: 'Mrs Smith',
    subject: '3C Geography',
    title: 'Field Trip'
  },
  {
    id: 3,
    startDate: moment().add(2, 'day'),
    endDate: moment().add(5, 'day'),
    teacher: 'Mr Adams',
    subject: '4D Chemistry',
    title: 'Exams'
  },
  {
    id: 4,
    startDate: moment().add(4, 'day'),
    endDate: moment().add(5, 'day'),
    teacher: 'Mr David',
    subject: '2F Geography',
    title: 'Field Trip'
  },
  {
    id: 5,
    startDate: moment().subtract(1, 'day'),
    endDate: moment().add(4, 'day'),
    teacher: 'Mrs Taylor',
    subject: '5B English',
    title: 'Exams'
  },
  {
    id: 6,
    startDate: moment().subtract(3, 'day'),
    endDate: moment().add(3, 'day'),
    teacher: 'Mr Lutman',
    subject: '5B Maths',
    title: 'Exams'
  }
];
