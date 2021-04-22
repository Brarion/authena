import { FIO, Resource, TaskType } from '../models/types'

type DeadLine = {
  five: Date
  four: Date
}

export enum TaskStatus {
  FIVE = 'ОТЛИЧНО',
  FOUR = 'ХОРОШО',
  DONE = 'СДАНО',
  WAITING = 'НЕ СДАНО',
}

export type Task = {
  id: string
  name: string
  status: TaskStatus
  statusDate: Date | null
  teacher: FIO
  type: TaskType
  deadline?: DeadLine
  countOfTry: [number, number]
  resources: Resource[]
}

export const TaskMock: Task = {
  id: '0',
  name: 'Кинематика материальной точки',
  status: TaskStatus.FIVE,
  statusDate: new Date(2021, 2, 5),
  teacher: {
    surname: 'Колесников',
    name: 'Михаил',
    patronymic: 'Юрьевич',
  },
  type: TaskType.AUTOMATIC_CHECK,
  deadline: {
    five: new Date(2021, 2, 8),
    four: new Date(2021, 3, 10),
  },
  countOfTry: [4, 10],
  resources: [
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF ',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
    'Механика, Черкасов А. В., Бочаров Т.К., БГТУ им. Шухова, 2005г. PDF',
  ],
}
