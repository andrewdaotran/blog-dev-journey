import React from 'react'

interface Props {
  name: string
  // date:
  comment: string
}

const Comment = () => {
  return (
    <div className=" border-b  pb-4">
      <div className="mb-2 grid grid-cols-2 font-bold">
        <h3 className="cols-span-1 text-gamboge">
          Andrew Tran
          {/* {name} */}
        </h3>
        <p className="cols-span-1 justify-self-end">
          11 December 2021
          {/* {date} */}
        </p>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum
        perspiciatis cupiditate voluptatem, aliquam amet.
        {/* {comment} */}
      </p>
    </div>
  )
}

export default Comment
