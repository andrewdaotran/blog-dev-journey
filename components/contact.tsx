import Image from 'next/image'
import EmailClipboard from './EmailClipboard'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Contact header */}
      <div className="mx-6 ">
        <div className="mx-auto grid max-w-7xl  pb-12 lg:grid-cols-3">
          <div className="lg:col-span-1"></div>
          <div className=" flex flex-col   lg:col-span-2 ">
            <h1 className="text-6xl sm:text-[5rem]  ">contact.</h1>
          </div>
        </div>
      </div>
      {/* Contact header end */}

      <div className="mx-6 grid max-w-7xl  pb-12 lg:grid-cols-3">
        {/*  */}
        <div className=" grid  lg:col-span-1 ">
          {/* Box */}
          <div className="mt-12 grid h-fit gap-4 border-2 border-black p-8 lg:max-w-sm">
            <div className={`  relative h-16 w-16`}>
              <Image
                src={'/thuvinh.jpg'}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="blog ownder profile picture"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold">email me!</h4>
            <p className="">
              Connect with me! I'm always happy to talk about new projects and
              opportunities.
            </p>
            <EmailClipboard textColor="black" bold={true} xAxisAlign="45" />
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
