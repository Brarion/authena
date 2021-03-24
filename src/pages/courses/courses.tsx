import { useTitle } from '../../utils'

import { Header } from '../../components/header'
import { Menu } from '../../components/menu'

import './styles.module.scss'

export const Courses = () => {
  // TODO set valid title
  useTitle('Курсы')

  return (
    <>
      <Header />
      <main>
        <Menu />
        <div>Hello</div>
        <div>Hello</div>
      </main>
    </>
  )
}
