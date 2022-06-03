import React, { useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

interface FormSubmitArgs extends InputForm {
  e: InputEvent
}

interface InputForm {
  name: string
  email: string
  message: string
}

const CommentForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>()

  const form = useRef<HTMLFormElement | null | undefined | string>(null)
  // const sendEmail = (e: InputEvent) => {
  //   e.preventDefault()
  //   emailjs
  //     .sendForm(
  //       'service_4fag3uj',
  //       'template_codkdce',
  //       form.current,
  //       'YQL2ADzf13Rdpq0f2'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  const onSubmit: SubmitHandler<InputForm> = async (
    data
    // e
  ) => {
    try {
      setSubmitted(true)
      // console.log(data)
      // console.log(e)
      // sendEmail(e)
      // e.preventDefault()
      // emailjs
      //   .sendForm(
      //     'service_4fag3uj',
      //     'template_codkdce',
      //     form.current,
      //     'YQL2ADzf13Rdpq0f2'
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text)
      //     },
      //     (error) => {
      //       console.log(error.text)
      //     }
      //   )
    } catch (error) {
      console.log(error)
      setSubmitted(false)
    }
  }

  return (
    // Conditional rendering, if comment submitted, show thank you message, if not, show form
    submitted ? (
      <div className=" mx-auto grid max-w-7xl border border-black bg-gamboge p-6 text-white">
        <h3 className="text-2xl font-bold ">
          Thank you for connecting with me!{' '}
        </h3>
        <p className="">
          I will reply as soon as possible. Guarantee a response within 24
          hours!
        </p>
      </div>
    ) : (
      <form
        className="mx-auto grid  p-4 lg:max-w-3xl"
        onSubmit={handleSubmit(onSubmit)}
        // ref={form}
        // ref={}
      >
        <div className="border-b pb-4">
          <h3 className="text-sm text-gamboge">enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">leave a comment below!</h4>
        </div>
        {/* <input {...register('_id')} type="hidden" name="_id" value={postId} /> */}

        {/* Name input */}
        <label className="grid">
          <span className="text-gray-700">name*</span>
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
          <span className="text-gray-700">email*</span>
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
          <span className="text-gray-700">message*</span>
          <textarea
            {...register('message', { required: true })}
            rows={8}
            className="form-textarea block w-full resize-none rounded border py-1 px-2 shadow outline-none ring-gamboge focus:ring-1 "
            placeholder="Leave your message here!"
          />
          {/* Comment error */}
          {errors.message ? (
            <span className="text-sm text-red-600">
              the message field is required{' '}
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
          send message
        </button>
      </form>
    )
  )
}

export default CommentForm
