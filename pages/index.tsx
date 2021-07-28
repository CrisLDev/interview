import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lost Store</title>
        <meta name="description" content="Buy all that you want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}
