import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

interface InputForm {
  _id: string /* hidden field */
  name: string
  email: string
  comment: string
}

interface PostId {
  postId: string
}

const CommentForm = ({ postId }: PostId) => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>()

  const onSubmit: SubmitHandler<InputForm> = async (data) => {
    try {
      const createdComment = await axios.post('/api/createComment', data)
      setSubmitted(true)
    } catch (error) {
      console.log(error)
      setSubmitted(false)
    }
  }
  return (
    // Conditional rendering, if comment submitted, show thank you message, if not, show form
    submitted ? (
      <div className="my-10 mx-auto grid max-w-lg bg-gamboge p-6 text-white">
        <h3 className="text-2xl font-bold ">
          Thank you for submitting your comment!{' '}
        </h3>
        <p className="">Once it has been approved, it will appear below</p>
      </div>
    ) : (
      <form
        className="mx-auto grid max-w-lg p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border-b pb-4">
          <h3 className="text-sm text-gamboge">enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">leave a comment below!</h4>
        </div>
        <input {...register('_id')} type="hidden" name="_id" value={postId} />

        {/* Name input */}
        <label className="grid">
          <span className="text-gray-700">name</span>
          <input
            {...register('name', { required: true })}
            className="form-input block w-full rounded border py-1 px-2 shadow outline-none ring-gamboge focus:ring-1 "
            type="text"
            placeholder="Jane Doe"
          />
          {/* Name error */}
          {errors.name ? (
            <span className="text-sm text-red-600">
              the name field is required{' '}
            </span>
          ) : (
            <span className="mb-5"></span>
          )}
        </label>
        {/* Email input */}
        <label className="grid">
          <span className="text-gray-700">email</span>
          <input
            {...register('email', { required: true })}
            className="form-input block w-full rounded border py-1 px-2 shadow outline-none ring-gamboge focus:ring-1 "
            type="email"
            placeholder="your@email.com"
          />
          {/* Email error */}
          {errors.email ? (
            <span className="text-sm text-red-600">
              the email field is required{' '}
            </span>
          ) : (
            <span className="mb-5"></span>
          )}
        </label>
        {/* Comment input */}
        <label className="grid">
          <span className="text-gray-700">comment</span>
          <textarea
            {...register('comment', { required: true })}
            rows={8}
            className="form-textarea block w-full resize-none rounded border py-1 px-2 shadow outline-none ring-gamboge focus:ring-1 "
            placeholder="Enter your comment here!"
          />
          {/* Comment error */}
          {errors.comment ? (
            <span className="text-sm text-red-600">
              the comment field is required{' '}
            </span>
          ) : (
            <span className="mb-5"></span>
          )}
        </label>

        {/* Submit button */}
        <button
          type="submit"
          className="focus:shadow-outline focus: rounded bg-gamboge py-1 text-white shadow outline-none transition ease-in-out hover:bg-gambogeLight"
        >
          submit
        </button>
      </form>
    )
  )
}

export default CommentForm
