import { ReactComponent as EllipseBtn } from 'assets/ellipseBtn.svg'
import { ReactComponent as WhiteArrow } from 'assets/whiteArrow.svg'

import styles from './styles.module.scss'

export const Courses = () => {
  return (
    <main>
      <LeftSide />
      <div>Hello</div>
      <div>Hello</div>
    </main>
  )
}

// TODO onClick={() => browserHistory.push(...)}
const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <div className={styles.completedCourses}>
        <p>
          Успешно
          <br />
          завершенные курсы
        </p>
        <div className={styles.btn}>
          <EllipseBtn />
          <WhiteArrow />
        </div>
      </div>
      <div>h</div>
      <div>h</div>
    </div>
  )
}
