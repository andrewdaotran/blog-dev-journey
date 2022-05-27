import { MoreButton } from './MoreButton'

import React from 'react'
import Image from 'next/image'
import { Post } from '../typings'
import { urlFor } from '../sanity'

interface Props {
  title: string
  description: string
  readMore: () => {}
  date: string
  imagePosition: string
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
}: Post) => {
  console.log(mainImage)
  return (
    <div className=" space-y-4 ">
      <div className={`  relative h-[23rem]  w-full`}>
        <Image
          src="/robert.jpg"
          // src={urlFor(mainImage).width(600).url()}
          layout="fill"
          objectFit="cover"
          objectPosition={imagePosition}
          // src={`${image}`}
          alt=""
        />
      </div>

      <div className="space-y-4">
        <p className="text-sm">
          11 December 2021
          {/* {date} */}
        </p>
        <h3 className="text-3xl font-bold">
          {/* Photo Model */}
          {title}
        </h3>
        <p className="">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          cum at ab necessitatibus nisi maxime molestias possimus doloribus
          ducimus illum! */}
          {description}
        </p>
        <MoreButton
          buttonText="read more"
          more={`/blog-posts/${slug.current}`}
        />
      </div>
    </div>
  )
}

export default BlogPreview
