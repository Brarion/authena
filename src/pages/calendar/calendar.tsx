import React from 'react'

import { getMonthName, useTitle } from '../../utils'

import { Path } from '../../components/path'
import { Header } from '../../components/header'
import { Menu } from '../../components/menu'
import { MainWrapper } from '../../components/mainWrapper'
import { LittleCalendar } from '../../components/littleCalendar'

import { routes } from '../../routes/config'

import styles from './styles.module.scss'
import { useStore } from 'effector-react'
import { fullCalendarModel } from '../../models'
import { TimeDropdown } from '../../components/calendarDropdowns'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'

export const Calendar = () => {
  useTitle(routes.find((route) => route.path === location.pathname)?.title ?? 'Authena')

  const { currentMonth, currentYear, currentWeek } = useStore(fullCalendarModel.$store)

  const loading = false

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <main className={styles.main}>
        <Menu />
        <MainWrapper loading={loading} className={styles.mainWrapper}>
          {loading ? null : (
            <>
              <Path />
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.dropdowns}>
                    <TimeDropdown
                      valueName={getMonthName(currentMonth)}
                      currentValue={currentMonth}
                      handleClick={fullCalendarModel.input.setMonth}
                      month
                    />
                    <TimeDropdown
                      valueName={currentYear}
                      currentValue={currentYear}
                      handleClick={fullCalendarModel.input.setYear}
                      year
                    />
                  </div>
                  <div className={styles.week}>
                    <div onClick={() => fullCalendarModel.input.decWeek()}>
                      <Left />
                    </div>
                    <div className={styles.weeks}>{`${currentWeek.start
                      .toLocaleDateString()
                      .split('.')
                      .slice(0, 2)
                      .join('.')} - ${currentWeek.end.toLocaleDateString().split('.').slice(0, 2).join('.')}`}</div>
                    <div onClick={() => fullCalendarModel.input.incWeek()}>
                      <Right />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </MainWrapper>
        <LittleCalendar />
      </main>
    </div>
  )
}
