import React from 'react'

import styles from './styles.module.scss'
import { useStore } from 'effector-react'
import { automaticTaskModel } from '../../../models/task'

export const AutomaticTask = () => {
  const languages: string[] = ['JavaScript', 'Python', 'Go']

  const { language, file, taskSent } = useStore(automaticTaskModel.$store)

  const handleLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files

    if (fileList !== null && fileList.length) {
      automaticTaskModel.input.setFile(fileList[0])
    }
  }

  return (
    <div className={styles.automaticTask}>
      <div className={styles.step}>
        <div className={`${styles.stepCount} ${language ? styles.done : ''}`}>1</div>
        <div className={styles.contentPart}>
          <div>Выберите язык программирования для данной работы</div>
          <div className={styles.languages}>
            {languages.map((l) => (
              <div
                key={l}
                className={`${styles.language} ${l === language ? styles.selectedLanguage : ''}`}
                onClick={() => automaticTaskModel.input.setLanguage(l)}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <div className={`${styles.stepCount} ${language && file ? styles.done : ''}`}>2</div>
        <div className={styles.contentPart}>
          <div>Загрузите файл с исходным кодом</div>
          {file !== null ? (
            <>
              <div className={styles.fileName}>{file.name}</div>
              <label htmlFor="file-input" className={!language ? styles.disabledLabel : ''}>
                <div>Загрузить другой файл</div>
              </label>
              <input disabled={!language} id="file-input" type="file" value="" onChange={handleLoadFile} />
            </>
          ) : (
            <>
              <label
                htmlFor="file-input"
                className={`${!language ? styles.disabledLabel : ''} ${styles.labelWithBottomMargin}`}
              >
                <div>Загрузить документ</div>
              </label>
              <input disabled={!language} id="file-input" type="file" value="" onChange={handleLoadFile} />
            </>
          )}
        </div>
      </div>
      <div className={`${styles.step} ${styles.btnWrapper}`}>
        <div className={`${styles.stepCount} ${language && file && taskSent ? styles.done : ''}`}>3</div>
        <div className={styles.contentPart}>
          <button
            className={`${styles.btn} ${!language || !file ? styles.btnDisabled : ''}`}
            disabled={!language || !file}
            type={'button'}
            onClick={() => automaticTaskModel.input.sendTask()}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}
