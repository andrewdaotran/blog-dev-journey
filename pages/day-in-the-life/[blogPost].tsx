import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import BackButton from '../../components/BackButton'
import CommentSection from '../../components/CommentSection'
import Sidebar from '../../components/Sidebar'
import { sanityClient } from '../../sanity'
import { Post, Slug } from '../../typings'

interface Props {
  post: Post
  sidebarPosts: Post[]
}

const BlogPostDayInTheLife = ({
  post: {
    _id,
    _createdAt,
    author,
    body,
    description,
    slug,
    title,
    mainImage,
    category,
    imagePosition,
  },
  sidebarPosts,
}: Props) => {
  const navigateBackTo = `/day-in-the-life`
  const navigateWords = 'day in the life'
  return (
    <div className="mx-6 my-12">
      <BackButton backRoute={navigateBackTo} buttonText={navigateWords} />
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-3">
        <div className="mr-6 md:col-span-2">
          <p className="mx-auto mb-6 text-sm">11 December 2021 / 3:41 pm</p>

          <h3 className="mb-6 text-6xl sm:text-[5rem]">{title}</h3>
          {/* <div className="">{body}</div> */}
          <CommentSection />
        </div>

        <Sidebar posts={sidebarPosts} />
      </div>
    </div>
  )
}

export default BlogPostDayInTheLife

// Backend

export const getStaticPaths = async () => {
  const category = 'dayInTheLife'
  const query = groq`*[_type == "post" && category == $category]{
  _id,
slug {
  current
},
} | order(_createdAt desc)`

  const slugs: Slug[] = await sanityClient.fetch(query, { category })

  const paths = slugs.map((post: Slug) => {
    return {
      params: {
        blogPost: post.slug.current,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = 'dayInTheLife'

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

  const sidebarPostsQuery = groq`*[_type == "post" && category == $category && slug.current != $slug] {
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
} | order(_createdAt desc) [0...3]`

  const post = await sanityClient.fetch(postQuery, { slug: params?.blogPost })

  const sidebarPosts = await sanityClient.fetch(sidebarPostsQuery, {
    category,
    slug: params?.blogPost,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      sidebarPosts,
    },
    revalidate: 3600,
  }
}
