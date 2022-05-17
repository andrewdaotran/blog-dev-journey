import React from 'react'
import CommentSection from '../../components/CommentSection'
import Sidebar from '../../components/Sidebar'

interface Props {
  // date:
  title: string
}

const BlogPost = () => {
  return (
    <div className="mx-6 ">
      <div className="mx-auto max-w-7xl  md:grid md:grid-cols-3">
        <div className="mr-6 md:col-span-2">
          <p className="mx-auto mb-6 text-sm">11 December 2021 / 3:41 pm</p>

          <h3 className="mb-6 text-6xl sm:text-[5rem]">
            Lorem ipsum dolor sit amet
            {/* {title} */}
          </h3>
          {/* <div className="">
      {blogPost}
    </div> */}
          <CommentSection />
        </div>

        <Sidebar />
      </div>
    </div>
  )
}

export default BlogPost
