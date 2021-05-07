import { combine, createDomain, sample } from 'effector'

const fullCalendarDomain = createDomain('full calendar')

const setMonth = fullCalendarDomain.createEvent<number>()
const setYear = fullCalendarDomain.createEvent<number>()

const incWeek = fullCalendarDomain.createEvent()
const decWeek = fullCalendarDomain.createEvent()

const $currentYear = fullCalendarDomain.createStore<number>(new Date().getFullYear()).on(setYear, (_, year) => year)

const $currentMonth = fullCalendarDomain.createStore<number>(new Date().getMonth()).on(setMonth, (_, month) => month)

const $currentWeek = fullCalendarDomain
  .createStore<{ start: Date; end: Date }>({
    start:
      new Date().getDay() === 1
        ? new Date(Number(new Date()) - 7 * 24 * 60 * 60 * 1000)
        : new Date().getDay() === 0
        ? new Date(Number(new Date()) - 6 * 24 * 60 * 60 * 1000)
        : new Date(Number(new Date()) - (new Date().getDay() - 1) * 24 * 60 * 60 * 1000),
    end: new Date(
      Number(
        new Date().getDay() === 1
          ? new Date(Number(new Date()) - 7 * 24 * 60 * 60 * 1000)
          : new Date().getDay() === 0
          ? new Date(Number(new Date()) - 6 * 24 * 60 * 60 * 1000)
          : new Date(Number(new Date()) - (new Date().getDay() - 1) * 24 * 60 * 60 * 1000)
      ) +
        (7 - 1) * 24 * 60 * 60 * 1000
    ),
  })
  .on(incWeek, ({ start, end }, _) => ({
    start: new Date(Number(start) + 7 * 24 * 60 * 60 * 1000),
    end: new Date(Number(end) + 7 * 24 * 60 * 60 * 1000),
  }))
  .on(decWeek, ({ start, end }, _) => ({
    start: new Date(Number(start) - 7 * 24 * 60 * 60 * 1000),
    end: new Date(Number(end) - 7 * 24 * 60 * 60 * 1000),
  }))

sample({
  source: combine<{ currentYear: number; currentMonth: number }>({
    currentYear: $currentYear,
    currentMonth: $currentMonth,
  }),
  clock: [$currentYear.updates, $currentMonth.updates],
  target: $currentWeek,
  fn: ({ currentYear, currentMonth }) => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)

    const firstMondayInFirstWeekOfMonth =
      firstDayOfMonth.getDay() === 1
        ? firstDayOfMonth
        : firstDayOfMonth.getDay() === 0
        ? new Date(Number(firstDayOfMonth) - 6 * 24 * 60 * 60 * 1000)
        : new Date(Number(firstDayOfMonth) - (firstDayOfMonth.getDay() - 1) * 24 * 60 * 60 * 1000)

    return {
      start: firstMondayInFirstWeekOfMonth,
      end: new Date(Number(firstMondayInFirstWeekOfMonth) + (7 - 1) * 24 * 60 * 60 * 1000),
    }
  },
})

export const fullCalendarModel = {
  $store: combine<{
    currentMonth: number
    currentYear: number
    currentWeek: { start: Date; end: Date }
  }>({
    currentMonth: $currentMonth,
    currentYear: $currentYear,
    currentWeek: $currentWeek,
  }),
  input: {
    setMonth,
    setYear,
    incWeek,
    decWeek,
  },
}
