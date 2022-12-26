import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Result from '../components/results'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Navbar/>
      <Result/>
    </div>
  )
}

export default Home
