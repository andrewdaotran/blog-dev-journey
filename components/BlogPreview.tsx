import React from 'react'
import { MoreButton } from './MoreButton'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '../typings'
import { urlFor } from '../sanity'
import { dayInTheLife, webDevelopment } from '../utils/universalVariables'

interface Props extends Post {
  priority: boolean
}

const BlogPreview = ({
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
  priority,
}: Props) => {
  const routeCategory =
    category === webDevelopment.name ? webDevelopment.slug : dayInTheLife.slug
  const navigateToPost = `/${routeCategory}/${slug.current}`
  const moreButtonText = 'read more'

  return (
    <div className=" space-y-4 ">
      <Link href={navigateToPost}>
        <div className={`  relative h-[23rem]  w-full cursor-pointer`}>
          <Image
            src={urlFor(mainImage).url()}
            layout="fill"
            objectFit="cover"
            objectPosition={imagePosition}
            alt="blog post main image"
            priority={priority}
          />
        </div>
      </Link>

      <article className="space-y-4">
        <p className="text-sm">
          11 December 2021
          {/* {date} */}
        </p>
        <Link href={navigateToPost}>
          <h3 className="black w-fit cursor-pointer text-3xl font-bold transition ease-in-out hover:text-gamboge">
            {title}
          </h3>
        </Link>
        <p className="">{description}</p>
        <MoreButton buttonText={moreButtonText} more={navigateToPost} />
      </article>
    </div>
  )
}

export default BlogPreview
