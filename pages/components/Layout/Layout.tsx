import { FC } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

interface ILayout {
  children: any
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
