import { format } from 'date-fns'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import BackButton from '../components/BackButton'
import CommentForm from '../components/CommentForm'
import CommentSection from '../components/CommentSection'
import Sidebar from '../components/Sidebar'
import { urlFor } from '../sanity'
import { Post, BlogCategory } from '../typings'

interface Props {
  post: Post
  sidebarPosts: Post[]
  category: BlogCategory
}

const SingleBlogPost = ({ category, post, sidebarPosts }: Props) => {
  const navigateBackTo = `/${category.slug}`
  const navigateWords = category.lowerCaseTitle
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
  const date = format(new Date(post._createdAt), `dd MMMM yyyy`)

  TimeAgo.setDefaultLocale(en.locale)
  TimeAgo.addLocale(en)

  const timeAgo = new TimeAgo('en-US')

  const dateAgo = timeAgo.format(new Date(post._createdAt), 'round')
  return (
    <div className="mx-6 my-12">
      <BackButton backRoute={navigateBackTo} buttonText={navigateWords} />
      <div
        className={`mx-auto max-w-7xl md:grid md:grid-cols-3 lg:grid-cols-4 `}
      >
        <article
          className={`${
            sidebarPosts.length > 0
              ? `mr-8 md:col-span-2 lg:col-span-3 `
              : 'md:col-span-3 lg:col-span-4 '
          } `}
        >
          {/* Date */}
          <p className="mx-auto mb-6  font-extralight">
            <span className="text-gray-400">published on</span> {`${date}`}
          </p>
          {/* Author bubble, name, and date div */}
          <div className="flex items-center space-x-2">
            {/* Author bubble */}
            <div className="relative h-10 w-10">
              <Image
                src={urlFor(post.author.image).url()}
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
              <span className="text-gray-400"> - {dateAgo}</span>
            </h3>
          </div>
          {/* Title */}
          <h3 className="my-10 text-6xl sm:mx-8 sm:text-[5rem]">
            {post.title}
          </h3>
          {/* Main image */}
          <div className="relative mb-8 h-80 w-full ">
            <Image
              src={urlFor(post.mainImage).url()}
              layout="fill"
              objectFit="cover"
              objectPosition={post.imagePosition}
              alt="blog post main image"
            />
          </div>
          {/* Body */}
          <div className="mx-auto mb-24 max-w-2xl whitespace-pre-line ">
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

export default SingleBlogPost
