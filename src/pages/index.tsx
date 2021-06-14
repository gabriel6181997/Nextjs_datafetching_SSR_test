import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { UserBox } from "src/components/UserBox"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Data Fetching SSR Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Data Fetching SSR Test</h1>

        <div className={styles.grid}>
          <UserBox
            name="Name"
            username="username"
            email="email"
          />


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  )
}
