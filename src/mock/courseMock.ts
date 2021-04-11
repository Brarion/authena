type FIO = {
  name: string
  surname: string
  patronymic?: string
}

export enum TaskType {
  TEST = 'TEST',
  MANUAL_CHECK = 'MANUAL_CHECK',
  AUTOMATIC_CHECK = 'AUTOMATIC_CHECK',
}

type Task = {
  name: string
  period: [Date, Date]
  countOfTry: [number, number]
  status: string
  type: TaskType
}

type Resource = string

export type Course = {
  id: string
  name: string
  authors: FIO[]
  teachers: FIO[]
  tasks: Task[]
  resources: Resource[]
}

export const CourseMock: Course = {
  id: '0',
  name: 'Концепции и модели физики. Механика',
  authors: [
    {
      surname: 'Иван',
      name: 'Иванов',
      patronymic: 'Иванович',
    },
    {
      surname: 'Сидоров',
      name: 'Роман',
    },
  ],
  teachers: [
    {
      surname: 'Колесников',
      name: 'Михаил',
      patronymic: 'Юрьевич',
    },
  ],
  tasks: [
    {
      name: 'Кинематика материальной точки',
      period: [new Date(2021, 0, 1), new Date(2021, 1, 28)],
      countOfTry: [4, 10],
      status: 'выполнено успешно, оценка 4',
      type: TaskType.TEST,
    },
    {
      name: 'Динамика материальной точки',
      period: [new Date(2021, 0, 1), new Date(2021, 1, 28)],
      countOfTry: [4, 10],
      status: 'выполнено успешно, оценка 4',
      type: TaskType.MANUAL_CHECK,
    },
    {
      name: 'Динамика системы частиц',
      period: [new Date(2021, 0, 1), new Date(2021, 1, 28)],
      countOfTry: [4, 10],
      status: 'выполнено успешно, оценка 4',
      type: TaskType.AUTOMATIC_CHECK,
    },
  ],
  resources: [
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
  ],
}
