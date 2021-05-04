import React from 'react'
import { useStore } from 'effector-react'
import { taskModel } from '../../../models'
import { TaskStatus } from '../../../mock/taskMock'

import styles from './styles.module.scss'

export const TaskHistory = () => {
  const { tryHistory, historyPending } = useStore(taskModel.$store)

  return (
    <div className={styles.historyWrapper}>
      {historyPending ? (
        <div>Загрузка...</div>
      ) : tryHistory.length === 0 ? (
        <div>Пусто 😥</div>
      ) : (
        tryHistory.map((t, index) => (
          <React.Fragment key={t.id}>
            <div className={styles.row}>
              <div>{tryHistory.length - index}</div>
              <div>{t.date.toLocaleDateString()}</div>
              <div className={styles.file}>{t.file}</div>
              <div className={styles.comment}>
                <div>Комментарий:</div>
                <div>{t.comment !== '' ? t.comment : 'отсутствует'}</div>
              </div>
              <div className={styles.status}>{t.status !== TaskStatus.WAITING ? t.status : ''}</div>
            </div>
            {tryHistory.length !== index + 1 && <div className={styles.divider} />}
          </React.Fragment>
        ))
      )}
    </div>
  )
}
