import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

interface Props {
  backRoute: string
  buttonText: string
}
function BackButton({ buttonText, backRoute }: Props) {
  return (
    <Link href={backRoute}>
      <div className="mx-auto max-w-7xl ">
        <div className=" group mb-12 flex w-fit  cursor-pointer items-center space-x-4">
          <ArrowCircleLeftIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
          <a className="font-bold transition ease-in-out group-hover:text-gamboge">
            {buttonText}
          </a>
        </div>
      </div>
    </Link>
  )
}

export default BackButton
