import {combine, createDomain, sample} from 'effector'
import {calendarWorksMock} from '../../mock/mock'

type CurrentWork = {
  title: string
  allCount: number
  count: number
  checkingCount: number
  percent: number
}

const calendarDomain = createDomain('calendar')

const setMonth = calendarDomain.createEvent<number>()
const setYear = calendarDomain.createEvent<number>()

const decMonth = calendarDomain.createEvent()
const incMonth = calendarDomain.createEvent()

const setDay = calendarDomain.createEvent<Date>()

const $currentDay = calendarDomain.createStore<number>(new Date().getDate()).on(setDay, (_, date) => date.getDate())

const $currentMonth = calendarDomain
  .createStore<number>(new Date().getMonth())
  .on(setMonth, (_, month) => month)
  .on(decMonth, (currentMonth, _) => (currentMonth === 0 ? 11 : currentMonth - 1))
  .on(incMonth, (currentMonth, _) => (currentMonth === 11 ? 0 : currentMonth + 1))
  .on(setDay, (_, date) => date.getMonth())

const $currentYear = calendarDomain
  .createStore<number>(new Date().getFullYear())
  .on(setYear, (_, year) => year)
  .on(setDay, (_, date) => date.getFullYear())

const $monthCalendar = calendarDomain.createStore<Date[]>(
  (function getInitialMonthCalendar() {
    const today = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

    const predMonday =
      today.getDay() === 1
        ? new Date(Number(today) - 7 * 24 * 60 * 60 * 1000)
        : today.getDay() === 0
        ? new Date(Number(today) - 6 * 24 * 60 * 60 * 1000)
        : new Date(Number(today) - (today.getDay() - 1) * 24 * 60 * 60 * 1000)

    return new Array<Date>(42)
      .fill(predMonday)
      .map((firstMonday, index) => new Date(Number(firstMonday) + index * 24 * 60 * 60 * 1000))
  })()
)

const $currentWorks = calendarDomain.createStore<CurrentWork[]>(
  (function () {
    const currentDayWorks = calendarWorksMock.find(
      (dayWorks) =>
        dayWorks.date.getDate() === new Date().getDate() &&
        dayWorks.date.getMonth() === new Date().getMonth() &&
        dayWorks.date.getFullYear() === new Date().getFullYear()
    )

    return currentDayWorks?.works ?? []
  })()
)

sample({
  source: combine<{
    currentMonth: number,
    currentYear: number,
  }>({
    currentMonth: $currentMonth,
    currentYear: $currentYear,
  }),
  clock: decMonth,
  target: $currentYear,
  fn: ({currentMonth, currentYear}) => (currentMonth === 11 ? currentYear - 1 : currentYear),
})

sample({
  source: combine<{
    currentMonth: number,
    currentYear: number,
  }>({
    currentMonth: $currentMonth,
    currentYear: $currentYear,
  }),
  clock: incMonth,
  target: $currentYear,
  fn: ({currentMonth, currentYear}) => (currentMonth === 0 ? currentYear + 1 : currentYear),
})

sample({
  source: combine<{
    currentMonth: number,
    currentYear: number,
  }>({
    currentMonth: $currentMonth,
    currentYear: $currentYear,
  }),
  clock: [$currentDay.updates, $currentMonth.updates, $currentYear.updates],
  target: $monthCalendar,
  fn: ({currentMonth, currentYear}) => {
    const today = new Date(currentYear, currentMonth, 1)

    const predMonday =
      today.getDay() === 1
        ? new Date(Number(today) - 7 * 24 * 60 * 60 * 1000)
        : today.getDay() === 0
        ? new Date(Number(today) - 6 * 24 * 60 * 60 * 1000)
        : new Date(Number(today) - (today.getDay() - 1) * 24 * 60 * 60 * 1000)

    return new Array<Date>(42)
      .fill(predMonday)
      .map((firstMonday, index) => new Date(Number(firstMonday) + index * 24 * 60 * 60 * 1000))
  },
})

sample({
  source: combine({
    currentDay: $currentDay,
    currentMonth: $currentMonth,
    currentYear: $currentYear,
  }),
  target: $currentWorks,
  fn: ({currentDay, currentMonth, currentYear}) => {
    const currentDayWorks = calendarWorksMock.find(
      (dayWorks) =>
        dayWorks.date.getDate() === currentDay &&
        dayWorks.date.getMonth() === currentMonth &&
        dayWorks.date.getFullYear() === currentYear
    )

    return currentDayWorks?.works ?? []
  },
})

export const calendarModel = {
  $store: combine<{
    currentDay: number,
    currentMonth: number,
    currentYear: number,
    monthCalendar: Date[],
    currentWorks: CurrentWork[],
  }>({
    currentDay: $currentDay,
    currentMonth: $currentMonth,
    currentYear: $currentYear,
    monthCalendar: $monthCalendar,
    currentWorks: $currentWorks,
  }),
  input: {
    setMonth,
    setYear,
    decMonth,
    incMonth,
    setDay,
  },
}
