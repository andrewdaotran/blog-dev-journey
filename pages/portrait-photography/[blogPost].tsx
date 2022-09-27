import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { Post, Slug } from '../../typings'
import { revalidateValue } from '../../utils/universalVariables'
import { webDevelopment } from '../../utils/blogData'
import SingleBlogPost from '../../components/SingleBlogPost'

interface Props {
  post: Post
  sidebarPosts: Post[]
}

const BlogPostWebDev = ({ post, sidebarPosts }: Props) => {
  return (
    <SingleBlogPost
      post={post}
      sidebarPosts={sidebarPosts}
      category={webDevelopment}
    />
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
