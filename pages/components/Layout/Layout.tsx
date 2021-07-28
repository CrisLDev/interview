import { FC } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

interface ILayout {
  children: any
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>Lost Store</title>
        <meta name="description" content="Buy all that you want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
