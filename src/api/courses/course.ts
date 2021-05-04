import {
  AddCollaboratorsToCourseRequest,
  CreateCourseRequest,
  CreateManualCheckingTaskRequest,
  EditCourseRequest,
  ExtendCourseRequest,
  GetAllCourseCollaboratorsResponse,
  GetAllCoursesResponse,
  GetAllCourseStudentsResponse,
  GetAllGroupsResponse,
  GetCourseResponse,
} from './types'
import { TError } from '../../types/error'
import { http } from '../http'

export const courseApi = {
  addCourse: async (course: CreateCourseRequest): Promise<null | TError> => {
    const res = await http.post('/courses', course)
    return res.data
  },
  getCourses: async (): Promise<GetAllCoursesResponse | TError> => {
    const res = await http.get('/courses')
    return res.data
  },
  getCourseById: async (courseId: string): Promise<GetCourseResponse | TError> => {
    const res = await http.get(`/courses/${courseId}`)
    return res.data
  },
  editCourseById: async ({
    courseId,
    course,
  }: {
    courseId: string
    course: EditCourseRequest
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}`, course)
    return res.data
  },
  extendCourseById: async ({
    courseId,
    course,
  }: {
    courseId: string
    course: ExtendCourseRequest
  }): Promise<null | TError> => {
    const res = await http.post(`/courses/${courseId}/extended`, course)
    return res.data
  },
  createManualCheckingTasks: async ({
    courseId,
    course,
  }: {
    courseId: string
    course: CreateManualCheckingTaskRequest
  }): Promise<null | TError> => {
    const res = await http.post(`/courses/${courseId}/manual-checking-tasks`, course)
    return res.data
  },
  getAllCoursesCollaboratorsByCourseId: async (
    courseId: string
  ): Promise<GetAllCourseCollaboratorsResponse | TError> => {
    const res = await http.get(`/courses/${courseId}/collaborators`)
    return res.data
  },
  addCollaboratorsToCourseByCourseId: async ({
    courseId,
    collaboratorsId,
  }: {
    courseId: string
    collaboratorsId: AddCollaboratorsToCourseRequest
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}/collaborators`, collaboratorsId)
    return res.data
  },
  deleteCollaboratorFromCourseByCourseId: async ({
    courseId,
    teacherId,
  }: {
    courseId: string
    teacherId: string
  }): Promise<null | TError> => {
    const res = await http.delete(`/courses/${courseId}/collaborators/${teacherId}`)
    return res.data
  },
  getCourseStudentsByCourseId: async (courseId: string): Promise<GetAllCourseStudentsResponse | TError> => {
    const res = await http.get(`/courses/${courseId}/students`)
    return res.data
  },
  addStudentsToCourseByCourseId: async ({
    courseId,
    studentsIds,
  }: {
    courseId: string
    studentsIds: string[]
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}/students`, studentsIds)
    return res.data
  },
  deleteStudentFromCourseByCourseId: async ({
    courseId,
    studentId,
  }: {
    courseId: string
    studentId: string
  }): Promise<null | TError> => {
    const res = await http.delete(`/courses/${courseId}/students/${studentId}`)
    return res.data
  },
  getAllGroups: async (): Promise<GetAllGroupsResponse | TError> => {
    const res = await http.get('/groups')
    return res.data
  },
}
