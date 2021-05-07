import React from 'react'

import { useTitle } from '../../utils'

import { Path } from '../../components/path'
import { Header } from '../../components/header'
import { Menu } from '../../components/menu'
import { MainWrapper } from '../../components/mainWrapper'
import { LittleCalendar } from '../../components/littleCalendar'

import { routes } from '../../routes/config'

import styles from './styles.module.scss'

export const Calendar = () => {
  useTitle(routes.find((route) => route.path === location.pathname)?.title ?? 'Authena')

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
                <div>test</div>
              </div>
            </>
          )}
        </MainWrapper>
        <LittleCalendar />
      </main>
    </div>
  )
}
