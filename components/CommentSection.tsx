import { CommentType } from '../typings'
import Comment from './Comment'

interface Props {
  comments: CommentType[]
}

const CommentSection = ({ comments }: Props) => {
  return (
    <div className=" mx-auto max-w-lg bg-[#F0F0F0] p-4">
      <div className=" mb-4  border-b border-black pb-4">
        <h3 className="text-xl">comments.</h3>
      </div>
      <div className="mx-auto grid max-w-lg gap-8  ">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  )
}

export default CommentSection
