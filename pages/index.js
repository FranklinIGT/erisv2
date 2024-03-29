import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './../components/Header/Header';
import Community from './../components/Community/Community';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/image/eris_Galaxy_icon.ico" />
      </Head>
      <Header></Header>
      <div id="Community">
      <Community ></Community>
      </div>
      


    </div>
  )
}
