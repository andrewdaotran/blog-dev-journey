import React from 'react'
import BlogPreview from './BlogPreview'

interface Props {
  title: string
  description: string
}

function BlogPosts({ title, description }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-6  grid max-w-7xl border-b-2 border-black pb-12 md:grid-cols-3">
        <div className="md:col-span-1"></div>
        <div className=" flex flex-col   md:col-span-2 ">
          <h1 className="text-6xl sm:text-[5rem]  ">{title}</h1>
          <p className="mt-12 text-lg xl:text-2xl">{description}</p>
        </div>
      </div>
      <div className="mx-6 my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  )
}

export default BlogPosts
