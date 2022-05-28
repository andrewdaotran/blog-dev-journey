import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import { MoreButton } from './MoreButton'

interface Props extends Post {}

const RecentPost = ({
  _createdAt,
  _id,
  author,
  body,
  description,
  slug,
  title,
  mainImage,
  category,
  imagePosition,
}: Props) => {
  // const routeCategory =
  //   category === 'webDevelopment'
  //     ? 'web-development'
  //     : category === 'dayInTheLife'
  //     ? 'day-in-the-life'
  //     : null
  const routeCategory =
    category === 'webDevelopment' ? 'web-development' : 'day-in-the-life'
  const navigateToPost = `/${routeCategory}/${slug.current}`
  const moreButtonText = 'read more'

  return (
    <div className="ml-6 mr-4 grid  gap-2 border-b-2 border-black py-8">
      <div className={`  relative h-14  w-14`}>
        <Image
          src={urlFor(mainImage).url()}
          // src={urlFor(author.image).url()}
          layout="fill"
          objectFit="cover"
          objectPosition={imagePosition}
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
          {title}
        </h3>
      </Link>
      <p className=" pb-2">
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ut illo
        ad reiciendis quidem dignissimos? */}
        {description}
      </p>
      <MoreButton buttonText={moreButtonText} more={navigateToPost} />
    </div>
  )
}

export default RecentPost
