import React from 'react'
import { CommentType } from '../typings'

interface Props {
  comment: CommentType
}

const Comment = ({ comment }: Props) => {
  return (
    <div className=" border-b  pb-4">
      <div className="mb-2 grid grid-cols-2 font-bold">
        <h3 className="cols-span-1 text-gamboge">{comment.name}</h3>
        <p className="cols-span-1 justify-self-end">
          {new Date(comment._createdAt).toLocaleString()}
        </p>
      </div>
      <p className="">{comment.comment}</p>
    </div>
  )
}

export default Comment
