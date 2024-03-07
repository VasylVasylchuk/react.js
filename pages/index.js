import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UserList from "../components/UserList/UserList";
import {mock} from "../model/mock";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mesh Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <UserList users={mock.results}/>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
