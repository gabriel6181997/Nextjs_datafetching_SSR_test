import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { UserBox } from "src/components/UserBox"
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const dataLists = await res.json();

  return {
    props: {
      dataLists,
    }
  }
}

const  Home = (props: any) =>  {
  const {dataLists} = props;

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
         {dataLists.map(data => {
           return(
          <Link
            key={data.id}
            href={{
              pathname: "/users/[slug]",
              query: {slug: data.id}
            }}
          >
            <a>
            <UserBox
              name={data.name}
              username={data.username}
              email={data.email}
            />
            </a>
          </Link>
           )
         })}

        </div>
      </main>

    </div>
  )
}

export default Home
