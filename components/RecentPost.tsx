import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import { dayInTheLife, webDevelopment } from '../utils/universalVariables'
import { MoreButton } from './MoreButton'

interface Props extends Post {}

const RecentPost = (post: Props) => {
  // const routeCategory =
  //   category === 'webDevelopment'
  //     ? 'web-development'
  //     : category === 'dayInTheLife'
  //     ? 'day-in-the-life'
  //     : null
  const routeCategory =
    post.category === webDevelopment.name
      ? webDevelopment.slug
      : dayInTheLife.slug
  const navigateToPost = `/${routeCategory}/${post.slug.current}`
  const moreButtonText = 'read more'

  return (
    <div className="ml-6 mr-4 grid  gap-2 border-b-2 border-black py-8">
      <div className={`  relative h-14  w-14`}>
        <Image
          src={urlFor(post.mainImage).url()}
          // src={urlFor(author.image).url()}
          layout="fill"
          objectFit="cover"
          objectPosition={post.imagePosition}
          alt="blog post main image"
          className="rounded-full"
        />
      </div>

      <p className="text-sm">
        11 December 2021
        {/* {date} */}
      </p>
      <Link href={navigateToPost}>
        <h3 className="w-fit cursor-pointer pb-2 text-2xl transition ease-in-out hover:text-gamboge">
          {/* Lorem, ipsum dolor. */}
          {post.title}
        </h3>
      </Link>
      <p className=" pb-2">{post.description}</p>
      <MoreButton buttonText={moreButtonText} more={navigateToPost} />
    </div>
  )
}

export default RecentPost
