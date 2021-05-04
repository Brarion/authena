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
  ID,
  Token,
} from './types'
import { TError } from '../../types/error'
import { http } from '../http'

export const courseApi = {
  addCourse: async ({ course, token }: { course: CreateCourseRequest; token: Token }): Promise<null | TError> => {
    const res = await http.post('/courses', course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  getCourses: async (token: Token): Promise<GetAllCoursesResponse | TError> => {
    const res = await http.get('/courses', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  getCourseById: async ({ courseId, token }: { courseId: ID; token: Token }): Promise<GetCourseResponse | TError> => {
    const res = await http.get(`/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  editCourseById: async ({
    courseId,
    course,
    token,
  }: {
    courseId: ID
    course: EditCourseRequest
    token: Token
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  extendCourseById: async ({
    courseId,
    course,
    token,
  }: {
    courseId: ID
    course: ExtendCourseRequest
    token: Token
  }): Promise<null | TError> => {
    const res = await http.post(`/courses/${courseId}/extended`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  createManualCheckingTasks: async ({
    courseId,
    course,
    token,
  }: {
    courseId: ID
    course: CreateManualCheckingTaskRequest
    token: Token
  }): Promise<null | TError> => {
    const res = await http.post(`/courses/${courseId}/manual-checking-tasks`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  getAllCoursesCollaboratorsByCourseId: async ({
    courseId,
    token,
  }: {
    courseId: ID
    token: Token
  }): Promise<GetAllCourseCollaboratorsResponse | TError> => {
    const res = await http.get(`/courses/${courseId}/collaborators`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  addCollaboratorsToCourseByCourseId: async ({
    courseId,
    collaboratorsId,
    token,
  }: {
    courseId: ID
    collaboratorsId: AddCollaboratorsToCourseRequest
    token: Token
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}/collaborators`, collaboratorsId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  deleteCollaboratorFromCourseByCourseId: async ({
    courseId,
    teacherId,
    token,
  }: {
    courseId: ID
    teacherId: ID
    token: Token
  }): Promise<null | TError> => {
    const res = await http.delete(`/courses/${courseId}/collaborators/${teacherId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  getCourseStudentsByCourseId: async (courseId: ID): Promise<GetAllCourseStudentsResponse | TError> => {
    const res = await http.get(`/courses/${courseId}/students`)
    return res.data
  },
  addStudentsToCourseByCourseId: async ({
    courseId,
    studentsIds,
    token,
  }: {
    courseId: ID
    studentsIds: ID[]
    token: Token
  }): Promise<null | TError> => {
    const res = await http.patch(`/courses/${courseId}/students`, studentsIds, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  deleteStudentFromCourseByCourseId: async ({
    courseId,
    studentId,
    token,
  }: {
    courseId: ID
    studentId: ID
    token: Token
  }): Promise<null | TError> => {
    const res = await http.delete(`/courses/${courseId}/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  getAllGroups: async (token: Token): Promise<GetAllGroupsResponse | TError> => {
    const res = await http.get('/groups', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
}
