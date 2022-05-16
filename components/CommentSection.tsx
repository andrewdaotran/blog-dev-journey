import Comment from './Comment'

const CommentSection = () => {
  return (
    <>
      <div className=" ">
        <div className="mx-auto mb-4 max-w-lg border-b border-black pb-4">
          <h3 className="text-xl">comments.</h3>
        </div>
        <div className="mx-auto mb-4 max-w-lg border-b  pb-4">
          <Comment />
        </div>
      </div>
    </>
  )
}

export default CommentSection
