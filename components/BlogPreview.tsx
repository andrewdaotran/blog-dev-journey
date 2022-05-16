import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import React from 'react'

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
      <img
        src="/robert.jpg"
        // src={`${image}`}
        alt=""
        className={`   h-[23rem]  w-full  object-cover object-top`}
        // ${imagePosition}
      />
      {/* </div> */}
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
        {/* Read More Button Div */}
        <div className=" group flex w-fit cursor-pointer items-center space-x-4 ">
          <button
            className="   font-bold transition ease-in-out group-hover:text-gamboge"
            // onclick={readMore}
          >
            Read More
          </button>
          <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
        </div>
      </div>
    </div>
  )
}

export default BlogPreview
