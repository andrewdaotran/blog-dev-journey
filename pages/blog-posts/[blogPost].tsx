import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import CommentSection from '../../components/CommentSection'
import Sidebar from '../../components/Sidebar'
import { sanityClient } from '../../sanity'
import { Post, Slug } from '../../typings'
import { fetchSlugs } from '../../utils/fetchSlugs'

interface Props {
  post: Post
}

const BlogPost = ({
  post: { title, description, slug, author, mainImage, body, _id, _createdAt },
}: Props) => {
  return (
    <div className="mx-6 my-12">
      <div className="mx-auto max-w-7xl  md:grid md:grid-cols-3">
        <div className="mr-6 md:col-span-2">
          <p className="mx-auto mb-6 text-sm">11 December 2021 / 3:41 pm</p>

          <h3 className="mb-6 text-6xl sm:text-[5rem]">{title}</h3>
          {/* <div className="">
      {body}
    </div> */}
          <CommentSection />
        </div>

        <Sidebar />
      </div>
    </div>
  )
}

export default BlogPost

export const getStaticPaths = async () => {
  //   const postsQuery = groq`*[_type == "post"]{
  //   _id,
  // slug {
  //   current
  // },
  // } | order(_createdAt desc)`

  //   const slugs = await sanityClient.fetch(postsQuery)
  //   console.log(slugs)

  const slugs = await fetchSlugs()

  const paths = slugs.map((post: Slug) => {
    return {
      params: {
        blogPost: post.slug.current,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
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
} `

  const post = await sanityClient.fetch(postQuery, { slug: params?.blogPost })

  return {
    props: { post },
  }
}
