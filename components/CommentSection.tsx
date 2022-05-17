import Comment from './Comment'

const CommentSection = () => {
  return (
    <>
      <div className=" bg-[#F0F0F0] p-4">
        <div className="mx-auto mb-4 max-w-lg border-b border-black pb-4">
          <h3 className="text-xl">comments.</h3>
        </div>
        <div className="mx-auto grid max-w-lg gap-8  ">
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  )
}

export default CommentSection
