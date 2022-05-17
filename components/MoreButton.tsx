import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

interface Props {
  more: string
  buttonText: string
}
export function MoreButton({ buttonText, more }: Props) {
  return (
    <div className=" group flex w-fit cursor-pointer items-center space-x-4 ">
      <Link href={more}>
        <a className="font-bold transition ease-in-out group-hover:text-gamboge">
          {buttonText}
        </a>
      </Link>
      <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
    </div>
  )
}
