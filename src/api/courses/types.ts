import { CoursePeriod } from '../../types/coursePeriod'
import { Teacher } from '../../types/teacher'
import Collator = Intl.Collator
import { Student } from '../../types/student'
import { Deadline } from '../../types/deadline'

export type Token = string

export type ID = string

export type CreateCourseRequest = {
  started: boolean
  title: string
  period: CoursePeriod
}

export type GetCourseResponse = {
  id: string
  title: string
  period: CoursePeriod
  creator: Teacher
  started: boolean
  tasksNumber: number
}

export type GetAllCoursesResponse = GetCourseResponse[]

export type EditCourseRequest = {
  started: boolean
  title: string
  period: CoursePeriod
}

export type ExtendCourseRequest = {
  started: boolean
  title: string
  collaborators: Collator[]
  students: Student[]
}

export type CreateManualCheckingTaskRequest = {
  title: string
  description: string
  deadline: Deadline
}

export type GetAllCourseCollaboratorsResponse = Teacher[][]

export type AddCollaboratorsToCourseRequest = string[]

export type GetAllCourseStudentsResponse = Student[]

export type GetAllGroupsResponse = Array<{
  id: string
  name: string
}>
