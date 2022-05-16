import React from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import BlogPreview from './BlogPreview'

interface Props {
  // title: string
  // description: string
  // checkAll: () => {}
  // blog1:
  // blog2:
  last: boolean
}

const BlogSection = ({ last }: Props) => {
  return (
    // outside
    <div className="mx-6 my-12">
      {/* container including margin bottom */}
      <div
        className={`mx-auto grid  max-w-7xl gap-8 pb-12 md:grid-cols-3 ${
          last ? null : 'border-b-2 border-black'
        }`}
      >
        {/* Blog Content Single Box */}
        <div className=" flex h-fit flex-col space-y-6 border-2 border-black p-8 md:col-span-1 md:max-w-xs">
          <h3 className="text-3xl font-bold">
            Content
            {/* {title} */}
          </h3>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            veritatis eveniet necessitatibus quod aut! Ipsa!
            {/* {description} */}
          </p>
          {/* Check All Button Div */}
          <div className=" group flex w-fit cursor-pointer items-center space-x-4">
            <button
              className="   font-bold transition ease-in-out group-hover:text-gamboge"
              // onclick={checkAll}
            >
              Check All
            </button>
            <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
          </div>
        </div>
        {/* Array of blog posts */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2">
          <BlogPreview />
          <BlogPreview />
        </div>
      </div>
    </div>
  )
}

export default BlogSection
