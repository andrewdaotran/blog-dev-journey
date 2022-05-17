import Image from 'next/image'
import React from 'react'
import { MoreButton } from './MoreButton'

interface Props {
  // image:
  // date:
  title: string
  description: string
}

const RecentPost = () => {
  return (
    <div className="ml-6 mr-4 grid  gap-2 border-b-2 border-black py-8">
      <div className={`  relative h-14  w-14`}>
        {/* ${imagePosition} */}
        <Image
          src="/robert.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          // src={`${image}`}
          alt=""
          className="rounded-full"

          // ${imagePosition}
        />
      </div>
      <p className="text-sm">
        11 December 2021
        {/* {date} */}
      </p>
      <h3 className="pb-2 text-2xl">
        Lorem, ipsum dolor.
        {/* {title} */}
      </h3>
      <p className=" pb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ut illo
        ad reiciendis quidem dignissimos?
      </p>
      <MoreButton buttonText="read more" more="/blog-posts/h" />
    </div>
  )
}

export default RecentPost
