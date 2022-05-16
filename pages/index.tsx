import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BlogSection from '../components/BlogSection'
import HeaderFooter from '../components/HeaderFooter'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ndru's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <BlogSection last={false} />
      <BlogSection last={true} />
    </div>
  )
}

export default Home
