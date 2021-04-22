export type FIO = {
  name: string
  surname: string
  patronymic?: string
}

export enum TaskType {
  TEST = 'TEST',
  MANUAL_CHECK = 'MANUAL_CHECK',
  AUTOMATIC_CHECK = 'AUTOMATIC_CHECK',
}

export enum Status {
  FIVE = 'выполнено успешно, оценка 5',
  FOUR = 'выполнено успешно, оценка 4',
  DONE = 'выполнено успешно',
  WAITING = 'ожидает выполнения',
}

export type Task = {
  id: string
  name: string
  period: [Date, Date]
  countOfTry: [number, number]
  status: Status
  type: TaskType
}

export type Resource = string