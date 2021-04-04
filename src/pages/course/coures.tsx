import React from 'react'

import { useParams } from 'react-router-dom'
import { useGate } from 'effector-react'
import { courseModel } from '../../models'
import { Path } from '../../components/path'

export const Course = () => {
  const params: { id: string } = useParams()

  useGate(courseModel.courseGate, params.id)

  // const { currentCourse } = useStore(courseModel.$store)

  return (
    <div>
      <Path />
    </div>
  )
}
