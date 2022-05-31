import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Clipboard {
  value: string
  copied: boolean
}

const Contact = () => {
  const [clipboard, setClipboard] = useState<Clipboard>({
    value: 'andrewdaotran@gmail.com',
    copied: false,
  })

  const onCopy = () => {
    setClipboard({ ...clipboard, copied: true })
  }

  const clipboardCopiedMessage = () => {
    setTimeout(() => {
      setClipboard({ ...clipboard, copied: false })
    }, 2000)
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-6">
        <div className="  grid max-w-7xl pb-12 md:grid-cols-3">
          {/*  */}
          <div className=" flex flex-col   md:col-span-1 ">
            <h1 className="text-6xl sm:text-[5rem]  ">contact.</h1>
            {/* Box */}
            <div className="mt-12 grid gap-4 border-2 border-black p-6">
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
              <div className=" relative flex items-center space-x-2">
                <MailIcon className=" h-4  w-4 text-gamboge " />
                <CopyToClipboard text={clipboard.value} onCopy={onCopy}>
                  <h3
                    className="font-bold transition ease-in-out hover:cursor-pointer hover:text-gamboge"
                    onClick={clipboardCopiedMessage}
                  >
                    andrewdaotran@gmail.com
                  </h3>
                </CopyToClipboard>
                {clipboard.copied ? (
                  <p className=" absolute top-[-30px] right-[45%] rounded-md bg-gamboge px-2 py-1 text-white">
                    copied!
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
