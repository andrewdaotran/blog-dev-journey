import React from 'react'
import { CommentType } from '../typings'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

interface Props {
  comment: CommentType
}

const Comment = ({ comment }: Props) => {
  TimeAgo.setDefaultLocale(en.locale)
  TimeAgo.addLocale(en)

  const timeAgo = new TimeAgo('en-US')

  const dateAgo = timeAgo.format(new Date(comment._createdAt), 'twitter')
  return (
    <div className=" border-b  pb-4">
      <div className="mb-2 grid grid-cols-2 font-bold">
        <h3 className="cols-span-1 text-gamboge">{comment.name}</h3>
        <p className="cols-span-1 justify-self-end">{dateAgo}</p>
      </div>
      <p className="">{comment.comment}</p>
    </div>
  )
}

export default Comment
