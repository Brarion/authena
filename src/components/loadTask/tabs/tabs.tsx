import React from 'react'

import styles from './styles.module.scss'

interface TabsProps {
  setTab: (tab: number) => void
  tab: number
}

export const Tabs = ({ setTab, tab }: TabsProps) => {
  const allTabs: string[] = ['Загрузка работы', 'История попыток']

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {allTabs.map((tabName, index) => (
          <div key={tabName} className={styles.tab} onClick={() => setTab(index)}>
            <div className={tab === index ? styles.selectedTab : ''}>{tabName}</div>
            {tab === index && <div className={styles.underline} />}
          </div>
        ))}
      </div>
      <div className={styles.divider} />
    </div>
  )
}
