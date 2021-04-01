import React from 'react'

import { useStore } from 'effector-react'

import { calendarModel } from '../../models/calendar'

import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'
import { ReactComponent as DropdownArrow } from '../../assets/dropdownArrow.svg'
import { ReactComponent as Flag } from '../../assets/flag.svg'
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'

import styles from './styles.module.scss'
import { calendarWorksMock } from '../../mock/mock'

export const LittleCalendar = () => {
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
          <div className={styles.year}>
            <div>{currentYear}</div>
            <DropdownArrow />
          </div>
          <div className={styles.month}>
            <div>{getMonthName()}</div>
            <DropdownArrow />
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
              <div>t</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
