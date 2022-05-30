import { format } from 'date-fns'
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import PortableText from 'react-portable-text'
import BackButton from '../../components/BackButton'
import CommentForm from '../../components/CommentForm'
import CommentSection from '../../components/CommentSection'
import Sidebar from '../../components/Sidebar'
import { sanityClient, urlFor } from '../../sanity'
import { Post, Slug } from '../../typings'
import { revalidateValue, webDevelopment } from '../../utils/universalVariables'

interface Props {
  post: Post
  sidebarPosts: Post[]
}

const BlogPostWebDev = ({ post, sidebarPosts }: Props) => {
  const navigateBackTo = `/${webDevelopment.slug}`
  const navigateWords = webDevelopment.lowerCaseTitle
  const serializers = {
    h1: (props: any) => <h1 className="text2xl my-5 font-bold" {...props} />,
    h2: (props: any) => <h2 className="my-5 text-xl font-bold" {...props} />,
    li: ({ children }: any) => <li className="ml-4 list-disc">{children}</li>,
    link: ({ href, children }: any) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
  }
  const date = format(new Date(post._createdAt), `dd MMMM yyyy / K:mm`)

  return (
    <div className="mx-6 my-12">
      <BackButton backRoute={navigateBackTo} buttonText={navigateWords} />
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-3">
        <article
          className={`${sidebarPosts.length > 0 ? `mr-6` : null} md:col-span-2`}
        >
          {/* Date */}
          <p className="mx-auto mb-6  font-extralight">
            <span className="text-gray-400">published on</span> {`${date} / `}
          </p>
          {/* Author bubble, name, and date div */}
          <div className="flex items-center space-x-2">
            {/* Author bubble */}
            <div className="relative h-10 w-10 ">
              <Image
                src={urlFor(post.mainImage).url()}
                layout="fill"
                objectFit="cover"
                objectPosition={post.imagePosition}
                alt="blog post main image"
                className="rounded-full"
              />
            </div>
            {/* Author  */}
            <h3 className="text-sm font-extralight">
              <span className="text-gray-400">written by </span>
              {post.author.name.toLowerCase()}
            </h3>
          </div>
          {/* Title */}
          <h3 className="mb-6 text-6xl sm:mx-8 sm:text-[5rem]">{post.title}</h3>
          {/* Main image */}
          <div className="relative h-80 w-full">
            <Image
              src={urlFor(post.mainImage).url()}
              layout="fill"
              objectFit="cover"
              objectPosition={post.imagePosition}
              alt="blog post main image"
            />
          </div>
          {/* Body */}
          <div className="mx-auto mb-24 max-w-2xl ">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={serializers}
            />
          </div>
          <CommentForm postId={post._id} />
          <CommentSection comments={post.comments} />
        </article>

        {sidebarPosts.length > 0 && <Sidebar posts={sidebarPosts} />}
      </div>
    </div>
  )
}

export default BlogPostWebDev

// Backend

export const getStaticPaths = async () => {
  const query = groq`*[_type == "post" && category == $category]{
  _id,
slug {
  current
},
} | order(_createdAt desc)`

  const slugs: Slug[] = await sanityClient.fetch(query, {
    category: webDevelopment.name,
  })

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
imagePosition,
"comments": *[_type == "comment" && post._ref == ^._id &&
  approved == true ] | order(_createdAt desc),
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

  const commentQuery = groq``

  const post = await sanityClient.fetch(postQuery, { slug: params?.blogPost })

  const sidebarPosts = await sanityClient.fetch(sidebarPostsQuery, {
    category: webDevelopment.name,
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
    revalidate: revalidateValue,
  }
}
