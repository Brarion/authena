import { CoursePeriod } from './coursePeriod'
import { Teacher } from './teacher'

export type Course = {
  id: string
  title: string
  period: CoursePeriod
  creator: Teacher
  started: boolean
  tasksNumber: number
  teachers: Teacher[]
  percents: number
}
