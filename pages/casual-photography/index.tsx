import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import BackButton from '../../components/BackButton'
import BlogPreview from '../../components/BlogPreview'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
import { revalidateValue } from '../../utils/universalVariables'
import { dayInTheLife } from '../../utils/blogData'

interface Props {
  posts: Post[]
}

const DayInTheLife = ({ posts }: Props) => {
  const navigateBackTo = `/`
  const navigateWords = 'home'

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-6">
        <BackButton buttonText={navigateWords} backRoute={navigateBackTo} />
        <div className="  grid max-w-7xl border-b-2 border-black pb-12 md:grid-cols-3">
          <div className="md:col-span-1"></div>
          <div className=" flex flex-col   md:col-span-2 ">
            <h1 className="text-6xl sm:text-[5rem]  ">day in the life.</h1>
            <p className="mt-12 text-lg xl:text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam autem ad debitis in tempore. Quos cum aliquam,
              exercitationem non natus quaerat perspiciatis, nemo et ad nobis
              minima harum? Voluptas, neque!
            </p>
          </div>
        </div>
        <div className=" my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => {
            return <BlogPreview {...post} key={post._id} priority={false} />
          })}
        </div>
      </div>
    </div>
  )
}

export default DayInTheLife

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == "post" && category == '${dayInTheLife.name}']{
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

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
    revalidate: revalidateValue,
  }
}
