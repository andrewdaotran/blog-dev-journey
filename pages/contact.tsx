import Image from 'next/image'
import EmailClipboard from '../components/EmailClipboard'

const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-6 border">
        <div className="  grid max-w-7xl pb-12 md:grid-cols-3">
          {/*  */}
          <div className=" grid  md:col-span-1 ">
            <h1 className="text-6xl sm:text-[5rem]  ">contact.</h1>
            {/* Box */}
            <div className="mt-12 grid gap-4 border-2 border-black p-8">
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
        </div>
      </div>
    </div>
  )
}

export default Contact
