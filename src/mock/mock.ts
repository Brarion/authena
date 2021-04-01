// TODO remove src/move

type CourseCard = {
  id: number
  title: string
  percents: number
  years: { start: number; end: number }
  semester: number
  teachers: Array<{ name: string; surname: string; patronymic?: string }>
  countOfWorks: number
}

export const coursesMock: CourseCard[] = [
  {
    id: 0,
    title: 'Механика',
    percents: 95,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 1,
    title: 'Молекулярная физика и термодинамика',
    percents: 87,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 2,
    title: 'Электродинамика',
    percents: 60,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 3,
    title: 'Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 4,
    title: 'Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 5,
    title: 'Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 6,
    title: 'Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 7,
    title: 'Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
  {
    id: 8,
    title: 'Механика, Механика, Механика Механика, Механика Механика',
    percents: 31,
    years: { start: 2020, end: 2021 },
    semester: 1,
    teachers: [
      { name: 'Александр', surname: 'Черкасов', patronymic: 'Васильевич' },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
      {
        name: 'Тимофей',
        surname: 'Бочаров',
        patronymic: 'Константинович',
      },
    ],
    countOfWorks: 6,
  },
]

type CalendarWorks = {
  date: Date
  works: Array<{
    title: string
    allCount: number
    count: number
    checkingCount: number
    percent: number
  }>
}

export const calendarWorksMock: CalendarWorks[] = [
  {
    date: new Date(2021, 3, 2),
    works: [
      {
        title: 'Механика',
        allCount: 6,
        count: 4,
        checkingCount: 2,
        percent: 87,
      },
      {
        title: 'Оптика и квантовая физика',
        allCount: 6,
        count: 4,
        checkingCount: 1,
        percent: 31,
      },
      {
        title: 'Элементы астрофизики',
        allCount: 6,
        count: 4,
        checkingCount: 2,
        percent: 18,
      },
      {
        title: 'Механика',
        allCount: 6,
        count: 4,
        checkingCount: 2,
        percent: 87,
      },
      {
        title: 'Механика',
        allCount: 6,
        count: 4,
        checkingCount: 2,
        percent: 87,
      },
      {
        title: 'Механика',
        allCount: 6,
        count: 4,
        checkingCount: 2,
        percent: 87,
      },
    ],
  },
]
