import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import BlogPreview from '../components/BlogPreview'
import Hero from '../components/Hero'
import { MoreButton } from '../components/MoreButton'
import { sanityClient } from '../sanity'
import { Post } from '../typings'
import { revalidateValue } from '../utils/universalVariables'
import {
  dayInTheLife,
  webDevelopment,
  photography1,
  photography2,
} from '../utils/blogData'

interface Props {
  webDevelopmentPosts: Post[]
  dayInTheLifePosts: Post[]
}

const Home: NextPage<Props> = ({ webDevelopmentPosts, dayInTheLifePosts }) => {
  const navigateToWebDevelopment = `/${webDevelopment.slug}`

  const navigateToDayInTheLife = `/${dayInTheLife.slug}`

  const buttonText = 'check all'
  return (
    <div className="">
      <Head>
        <title>ndru's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      {/* Web Development */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 my-12 grid max-w-7xl gap-y-8 border-b-2 border-black pb-12 md:grid-cols-3 md:gap-x-8 ">
          {/* Blog Content Single Box */}
          <div className=" grid h-fit gap-6 border-2 border-black p-8 md:col-span-1 md:max-w-xs">
            <Link href={navigateToWebDevelopment}>
              <h3 className="w-fit cursor-pointer text-3xl font-bold transition ease-in-out hover:text-gamboge">
                {photography1.lowerCaseTitle}.{/* {title} */}
              </h3>
            </Link>
            <p className="">
              {photography1.description}
              {/* {description} */}
            </p>
            <MoreButton
              buttonText={buttonText}
              more={navigateToWebDevelopment}
            />
          </div>
          {/* Array of blog posts */}
          <div className="col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {webDevelopmentPosts.map((post: Post) => {
              return <BlogPreview {...post} key={post._id} priority={true} />
            })}
          </div>
        </div>
      </div>
      {/* Web Development End */}

      {/* Day In The Life */}
      <div className="mx-auto max-w-7xl ">
        <div className="mx-6 my-12 grid max-w-7xl  gap-y-8  pb-12  md:grid-cols-3 md:gap-x-8 ">
          {/* Blog Content Single Box */}
          <div className=" grid h-fit  gap-6 border-2 border-black p-8 md:col-span-1 md:max-w-xs ">
            <Link href={navigateToDayInTheLife}>
              <h3 className="w-fit cursor-pointer text-3xl font-bold transition ease-in-out hover:text-gamboge">
                {photography2.lowerCaseTitle}.{/* {title} */}
              </h3>
            </Link>
            <p className="">
              {photography2.description}
              {/* {description} */}
            </p>
            <MoreButton buttonText={buttonText} more={navigateToDayInTheLife} />
          </div>
          {/* Array of blog posts */}
          <div className="col-span-2 grid grid-cols-1 gap-4  sm:grid-cols-2 ">
            {dayInTheLifePosts.map((post: Post) => {
              return <BlogPreview {...post} key={post._id} priority={true} />
            })}
          </div>
        </div>
      </div>
      {/* Day In The Life End */}
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const postsQuery = groq`*[_type == "post" && category == $category ]{
  _id,
  _createdAt,
  title,
  author-> {
  name, 
  image
},
description,
mainImage,
slug {
  current
},
body,
category,
imagePosition
} | order(_createdAt desc) [0...2]`

  const webDevelopmentPosts = await sanityClient.fetch(postsQuery, {
    category: webDevelopment.name,
  })
  // const webDevelopmentPosts = await sanityClient.fetch(webQuery)

  const dayInTheLifePosts = await sanityClient.fetch(postsQuery, {
    category: dayInTheLife.name,
  })

  return {
    props: {
      webDevelopmentPosts,
      dayInTheLifePosts,
    },
    revalidate: revalidateValue,
  }
}
