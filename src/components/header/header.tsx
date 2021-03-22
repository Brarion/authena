import { useGate, useStore } from 'effector-react'

import { Icon } from '../icon'
import { Search } from '../search'

import { searchModel } from '../../models/search'
import { userModel } from '../../models/user'

import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import { ReactComponent as Logout } from '../../assets/logout.svg'
import { ReactComponent as UserFIO } from '../../assets/userFIO.svg'

import styles from './styles.module.scss'

export const Header = () => {
  useGate(searchModel.gate)

  const { search } = useStore(searchModel.$store)
  const { user } = useStore(userModel.$store)

  return (
    <header className={styles.wrapper}>
      <Icon />
      <Search value={search} onChange={searchModel.input.setSearch} placeholder={'Найти курс'} StartIcon={SearchIcon} />
      <div className={styles.user}>
        <div className={styles.fio}>
          <UserFIO />
          <p>{user !== null ? `${user.name} ${user.surname}` : ''}</p>
        </div>
        <Logout />
      </div>
    </header>
  )
}
