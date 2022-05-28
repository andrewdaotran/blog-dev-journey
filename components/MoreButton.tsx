import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

interface Props {
  more: string
  buttonText: string
}
export function MoreButton({ buttonText, more }: Props) {
  return (
    <Link href={more}>
      <div className=" group flex w-fit cursor-pointer items-center space-x-4 ">
        <a className="font-bold transition ease-in-out group-hover:text-gamboge">
          {buttonText}
        </a>
        <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
      </div>
    </Link>
  )
}
