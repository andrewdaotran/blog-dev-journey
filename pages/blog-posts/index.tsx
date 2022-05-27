import { GetStaticProps } from 'next'
import React from 'react'
import BlogPreview from '../../components/BlogPreview'
import { Post } from '../../typings'
import { fetchPosts } from '../../utils/fetchPosts'

interface Props {
  posts: Post[]
}

const WebDevelopment = ({ posts }: Props) => {
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-6  grid max-w-7xl border-b-2 border-black pb-12 md:grid-cols-3">
        <div className="md:col-span-1"></div>
        <div className=" flex flex-col   md:col-span-2 ">
          <h1 className="text-6xl sm:text-[5rem]  ">web development.</h1>
          <p className="mt-12 text-lg xl:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            autem ad debitis in tempore. Quos cum aliquam, exercitationem non
            natus quaerat perspiciatis, nemo et ad nobis minima harum? Voluptas,
            neque!
          </p>
        </div>
      </div>
      <div className="mx-6 my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => {
          return <BlogPreview {...post} key={post._id} />
        })}
      </div>
    </div>
  )
}

export default WebDevelopment

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  return {
    props: {
      posts,
    },
  }
}
