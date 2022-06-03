import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import { webDevelopment, dayInTheLife } from '../utils/universalVariables'
import Link from 'next/link'
import EmailClipboard from './EmailClipboard'

interface Props {
  children: React.ReactNode
}

const HeaderFooter = ({ children }: Props) => {
  return (
    <>
      {/* header */}
      <header className=" mb-16 bg-cultured">
        <div className="mx-auto  flex max-w-7xl  justify-between py-5 px-16">
          <Link href="/">
            <a className="">ndru.</a>
          </Link>
          <h1 className="hidden sm:inline-flex">
            <span className="pr-2">(415) 810.9777</span> /{' '}
            <span className="pl-2">andrewdaotran@gmail.com</span>
          </h1>
          <h1 className="">about me</h1>
        </div>
      </header>
      {children}
      {/* footer */}
      <footer className=" bg-richBlack">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 py-20 px-6 text-white sm:grid-cols-2">
          {/* ndru div */}
          <div className="">
            <h2 className="mb-10 text-3xl">ndru.</h2>
            <p className="mb-4">A look into my software development journey.</p>
            {/* Check All Button Div */}
            <div className=" group flex w-fit cursor-pointer items-center space-x-4 text-gamboge">
              <button
                className="   font-bold transition ease-in-out group-hover:text-white"
                // onclick={checkAll}
              >
                Check All
              </button>
              <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-white" />
            </div>
          </div>
          {/* navigation div */}
          <div className="">
            <h2 className="mb-5 border-b-2  border-white pb-5 text-xl">
              navigation.
            </h2>
            {/* links div */}
            <div className="grid">
              <Link href="/" className="">
                <a className=" max-w-fit  transition ease-in-out hover:text-gamboge">
                  home
                </a>
              </Link>
              <Link href="/about-me" className="">
                <a className="max-w-fit transition ease-in-out hover:text-gamboge">
                  about me
                </a>
              </Link>
              <Link href={`/${webDevelopment.slug}`} className="">
                <a className="max-w-fit transition ease-in-out hover:text-gamboge">
                  web development
                </a>
              </Link>
              <Link href={`/${dayInTheLife.slug}`} className="">
                <a className="max-w-fit transition ease-in-out hover:text-gamboge">
                  day in the life
                </a>
              </Link>
              {/* <Link href="/contact" className="">
                <a className="max-w-fit transition ease-in-out hover:text-gamboge">
                  contact
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <EmailClipboard
          textColor="white"
          justifyCenter={true}
          paddingBottom={true}
          xAxisAlign="47"
        />
      </footer>
    </>
  )
}

export default HeaderFooter
