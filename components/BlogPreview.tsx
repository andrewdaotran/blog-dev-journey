import { MoreButton } from './MoreButton'

import React from 'react'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  readMore: () => {}
  date: string
  imagePosition: string
}

const BlogPreview = () => {
  return (
    <div className=" space-y-4 ">
      <div className={`  relative h-[23rem]  w-full`}>
        {/* ${imagePosition} */}
        <Image
          src="/robert.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          // src={`${image}`}
          alt=""

          // ${imagePosition}
        />
      </div>

      <div className="space-y-4">
        <p className="text-sm">
          11 December 2021
          {/* {date} */}
        </p>
        <h3 className="text-3xl font-bold">
          Photo Model
          {/* {title} */}
        </h3>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          cum at ab necessitatibus nisi maxime molestias possimus doloribus
          ducimus illum!
          {/* {description} */}
        </p>
        <MoreButton buttonText="read more" more="/blog-posts/h" />
      </div>
    </div>
  )
}

export default BlogPreview
