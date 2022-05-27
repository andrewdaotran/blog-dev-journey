import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import BlogPreview from '../components/BlogPreview'
import Hero from '../components/Hero'
import { MoreButton } from '../components/MoreButton'
import { sanityClient } from '../sanity'
import { Post } from '../typings'

interface Props {
  webDevelopmentPosts: Post[]
  dayInTheLifePosts: Post[]
}

const Home: NextPage<Props> = ({ webDevelopmentPosts, dayInTheLifePosts }) => {
  console.log('this is real', webDevelopmentPosts)
  console.log('its me', dayInTheLifePosts)
  return (
    <div className="">
      <Head>
        <title>ndru's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {/* Web Development */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 my-12">
          {/* container including margin bottom */}
          <div
            className={`mx-auto grid  max-w-7xl gap-8 border-b-2 border-black pb-12 md:grid-cols-3  `}
          >
            {/* Blog Content Single Box */}
            <div className=" flex h-fit flex-col space-y-6 border-2 border-black p-8 md:col-span-1 md:max-w-xs ">
              <h3 className="text-3xl font-bold">
                web development.
                {/* {title} */}
              </h3>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                veritatis eveniet necessitatibus quod aut! Ipsa!
                {/* {description} */}
              </p>
              <MoreButton buttonText="check all" more="/blog-posts" />
            </div>
            {/* Array of blog posts */}
            <div className="col-span-2 grid grid-cols-1 gap-4  sm:grid-cols-2 ">
              {webDevelopmentPosts.map((post: Post) => {
                return (
                  <>
                    <BlogPreview {...post} key={post._id} />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Web Development End */}

      {/* Day In The Life */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 my-12">
          {/* container including margin bottom */}
          <div
            className={`mx-auto grid  max-w-7xl gap-8  pb-12 md:grid-cols-3  `}
          >
            {/* Blog Content Single Box */}
            <div className=" flex h-fit flex-col space-y-6 border-2 border-black p-8 md:col-span-1 md:max-w-xs ">
              <h3 className="text-3xl font-bold">
                day in the life.
                {/* {title} */}
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quasi alias voluptatibus accusantium fuga aut odit repellendus
                doloremque nostrum a nisi nemo, dolore ipsa voluptatem?
                {/* {description} */}
              </p>
              <MoreButton buttonText="check all" more="/blog-posts" />
            </div>
            {/* Array of blog posts */}
            <div className="col-span-2 grid grid-cols-1 gap-4  sm:grid-cols-2 ">
              {dayInTheLifePosts.map((post: Post) => {
                return (
                  <>
                    <BlogPreview {...post} key={post._id} />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Day In The Life End */}
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const postsQuery = groq`*[_type == "post" && category == $category ][0...2]{
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
} | order(_createdAt desc)`

  const webDevelopmentPosts = await sanityClient.fetch(postsQuery, {
    category: 'webDevelopment',
  })
  // const webDevelopmentPosts = await sanityClient.fetch(webQuery)

  const dayInTheLifePosts = await sanityClient.fetch(postsQuery, {
    category: 'dayInTheLife',
  })

  return {
    props: {
      webDevelopmentPosts,
      dayInTheLifePosts,
    },
  }
}
