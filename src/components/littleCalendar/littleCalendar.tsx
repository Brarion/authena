import React from 'react'

import { useStore } from 'effector-react'

import { calendarModel } from '../../models'

import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'
import { ReactComponent as DropdownArrow } from '../../assets/dropdownArrow.svg'
import { ReactComponent as Flag } from '../../assets/flag.svg'
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'

import styles from './styles.module.scss'

import { calendarWorksMock } from '../../mock/mock'
import { useClickAway } from '../../utils/useClickAway'

export const LittleCalendar = () => {
  const [openedYearDropdown, setOpenedYearDropdown] = React.useState<boolean>(false)
  const [openedMonthDropdown, setOpenedMonthDropdown] = React.useState<boolean>(false)

  const monthRef = React.useRef(null)
  const yearRef = React.useRef(null)

  useClickAway(monthRef, setOpenedMonthDropdown)
  useClickAway(yearRef, setOpenedYearDropdown)

  const { currentDay, currentMonth, currentYear, monthCalendar, currentWorks } = useStore(calendarModel.$store)

  const getMonthName = (): string => {
    return [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ][currentMonth]
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.dropdowns}>
          <div className={styles.month} ref={monthRef} onClick={() => setOpenedMonthDropdown(!openedMonthDropdown)}>
            <div>{getMonthName()}</div>
            <DropdownArrow />
            {openedMonthDropdown && (
              <>
                <MonthDropdown currentMonth={currentMonth} handleClick={calendarModel.input.setMonth} />
                <div className={styles.monthUnderline} />
              </>
            )}
          </div>
          <div className={styles.year} ref={yearRef} onClick={() => setOpenedYearDropdown(!openedYearDropdown)}>
            <div>{currentYear}</div>
            <DropdownArrow />
            {openedYearDropdown && (
              <>
                <YearDropdown currentYear={currentYear} handleClick={calendarModel.input.setYear} />
                <div className={styles.yearUnderline} />
              </>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <div onClick={() => calendarModel.input.decMonth()}>
            <Left />
          </div>
          <div onClick={() => calendarModel.input.incMonth()}>
            <Right />
          </div>
        </div>
      </div>
      <div className={styles.days}>
        {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className={styles.littleCalendar}>
        {monthCalendar.map((day) => (
          <div
            key={Number(day)}
            className={`${
              day.getMonth() === new Date(currentYear, currentMonth).getMonth() ? styles.currentMonth : ''
            } ${day.getDate() === currentDay && day.getMonth() === currentMonth ? styles.currentDay : ''}`}
            onClick={() => calendarModel.input.setDay(day)}
          >
            {day.getDate()}
            {calendarWorksMock.findIndex(
              (dayWorks) =>
                dayWorks.date.getDate() === day.getDate() &&
                dayWorks.date.getMonth() === day.getMonth() &&
                dayWorks.date.getFullYear() === day.getFullYear()
            ) >= 0 && <Flag />}
          </div>
        ))}
      </div>
      <h2>{`Сданные работы на ${String(currentDay).length === 1 ? `0${currentDay}` : currentDay}.${
        String(currentMonth + 1).length === 1 ? `0${currentMonth + 1}` : currentMonth + 1
      }.${currentYear}`}</h2>
      <div className={styles.currentWorks}>
        {currentWorks.length === 0 ? (
          <h2>Пусто 😥</h2>
        ) : (
          currentWorks.map((work, index) => (
            <div key={index} className={`${styles.work} ${work.percent >= 70 ? styles.cool : ''}`}>
              <div>
                <div>{work.title}</div>
                <div>
                  <div>{`Сдано: ${work.count} из ${work.allCount}`}</div>
                  <Ellipse />
                  <div>{`На проверке: ${work.checkingCount}`}</div>
                </div>
              </div>
              <div className={styles.progress}>
                <div className={`${styles.text} ${work.percent >= 70 ? styles.cool : ''}`}>{`${work.percent}%`}</div>
                <figure style={{ margin: '0' }}>
                  <svg viewBox={'0 0 60 60'} width={'100%'} height={'100%'}>
                    {work.percent >= 70 ? (
                      <linearGradient id={`gradient${index}`} x1="80%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8BF3E1" />
                        <stop offset="100%" stopColor="#0C959D" />
                      </linearGradient>
                    ) : (
                      <linearGradient id={`gradient${index}`} x1="80%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFD653" />
                        <stop offset="100%" stopColor="#F47231" />
                      </linearGradient>
                    )}
                    <circle
                      className="ring"
                      cx={30}
                      cy={30}
                      r={25}
                      strokeWidth={4}
                      fill="transparent"
                      stroke="#60847E"
                    />

                    <circle
                      className="transparent"
                      cx={30}
                      cy={30}
                      r={25}
                      strokeWidth={4}
                      fill="transparent"
                      stroke={`url(#gradient${index})`}
                      strokeDasharray={`${(work.percent * (2 * Math.PI * 25)) / 100} ${2 * Math.PI * 25}`}
                    />
                  </svg>
                </figure>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

interface MonthDropdownProps {
  currentMonth: number
  handleClick: (month: number) => void
}

const MonthDropdown = ({ currentMonth, handleClick }: MonthDropdownProps) => {
  return (
    <div className={styles.months}>
      {[
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ].map((month, index) => (
        <div
          key={month}
          className={currentMonth === index ? styles.selectedMonth : ''}
          onClick={() => handleClick(index)}
        >
          {month}
        </div>
      ))}
    </div>
  )
}

interface YearDropdownProps {
  currentYear: number
  handleClick: (year: number) => void
}

const YearDropdown = ({ currentYear, handleClick }: YearDropdownProps) => {
  return (
    <div className={styles.years}>
      <div className={styles.currentYearButtons}>
        <div onClick={() => handleClick(currentYear - 1)}>
          <Left />
        </div>
        <div>{currentYear}</div>
        <div onClick={() => handleClick(currentYear + 1)}>
          <Right />
        </div>
      </div>
      <div className={styles.content}>
        {new Array(8)
          .fill(0)
          .map((_, index) => currentYear - 1 + index)
          .map((year) => (
            <div
              key={year}
              className={currentYear === year ? styles.selectedYear : ''}
              onClick={() => handleClick(year)}
            >
              {year}
            </div>
          ))}
      </div>
    </div>
  )
}
