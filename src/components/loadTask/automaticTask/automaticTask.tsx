import React from 'react'

import styles from './styles.module.scss'

export const AutomaticTask = () => {
  const languages: string[] = ['JavaScript', 'Python', 'Go']

  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('')

  return (
    <div className={styles.automaticTask}>
      <div className={styles.step}>
        <div className={`${styles.stepCount} ${selectedLanguage ? styles.done : ''}`}>1</div>
        <div className={styles.contentPart}>
          <div>Выберите язык программирования для данной работы</div>
          <div>
            {languages.map((l) => (
              <div
                key={l}
                className={`${styles.language} ${l === selectedLanguage ? styles.selectedLanguage : ''}`}
                onClick={() => setSelectedLanguage(l)}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
