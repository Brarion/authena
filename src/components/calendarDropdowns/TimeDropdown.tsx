import React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as DropdownArrow } from '../../assets/dropdownArrow.svg'
import { useClickAway } from '../../utils'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'

interface TimeDropdownProps {
  month?: boolean
  year?: boolean
  valueName: string | number
  currentValue: number
  handleClick: (value: number) => void
}

export const TimeDropdown = ({ month, year, valueName, currentValue, handleClick }: TimeDropdownProps) => {
  const [openedDropdown, setOpenedDropdown] = React.useState<boolean>(false)

  const ref = React.useRef(null)

  useClickAway(ref, setOpenedDropdown)

  return (
    <div ref={ref} onClick={() => setOpenedDropdown(!openedDropdown)}>
      <div className={styles.value}>{valueName}</div>
      <DropdownArrow className={`${styles.arrow} ${openedDropdown ? styles.rotated : ''}`} />
      {openedDropdown && (
        <>
          {month ? (
            <MonthDropdown currentMonth={currentValue} handleClick={handleClick} />
          ) : year ? (
            <YearDropdown currentYear={currentValue} handleClick={handleClick} />
          ) : null}
          <div className={styles.monthUnderline} />
        </>
      )}
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
