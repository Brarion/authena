import React from 'react'

import { useStore } from 'effector-react'

import { userModel } from '../../models/user'

import { browserHistory } from '../../browserHistory'

import { menuRoutesPaths, routesPaths } from '../../routes/config'

import { ReactComponent as EllipseBtn } from '../../assets/ellipseBtn.svg'
import { ReactComponent as WhiteArrow } from '../../assets/whiteArrow.svg'
import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg'
import { ReactComponent as CoursesIcon } from '../../assets/courses.svg'
import { ReactComponent as StatisticsIcon } from '../../assets/statistics.svg'
import { ReactComponent as HelpIcon } from '../../assets/help.svg'

import styles from './styles.module.scss'

export const Menu = () => {
  const { user } = useStore(userModel.$store)

  const getIcon = (path: string) => {
    switch (path) {
      case routesPaths.calendar.path:
        return <CalendarIcon />
      case routesPaths.courses.path:
        return <CoursesIcon />
      case routesPaths.statistics.path:
        return <StatisticsIcon />
      case routesPaths.help.path:
        return <HelpIcon />
      default:
        return <></>
    }
  }

  return (
    <>
      <div className={styles.leftSide}>
        <div className={styles.completedCourses} onClick={() => browserHistory.push(routesPaths.completedCourses.path)}>
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
        <div className={styles.menu}>
          {menuRoutesPaths.map((route) => (
            <div
              key={route.path}
              className={`${styles.menuItem} ${location.pathname === route.path ? styles.currentItemMenu : ''}`}
              onClick={() => browserHistory.push(route.path)}
            >
              {getIcon(route.path)}
              <div>{route.title}</div>
              {location.pathname === route.path && <div className={styles.verticalLine} />}
            </div>
          ))}
        </div>
        <div className={styles.path}>
          <p className={styles.pathTitle}>
            Вы сдаёте работы
            <br />
            вовремя на
          </p>
          <p className={styles.percents}>{`${user?.percents ?? '0'}%`}</p>
        </div>
      </div>
    </>
  )
}
