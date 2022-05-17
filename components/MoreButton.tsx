import { ArrowCircleRightIcon } from '@heroicons/react/outline'

interface Props {
  // readMore: () => {}
  buttonText: string
}
export function MoreButton({ buttonText }: Props) {
  return (
    <div className=" group flex w-fit cursor-pointer items-center space-x-4 ">
      <button
        className="   font-bold transition ease-in-out group-hover:text-gamboge" // onclick={readMore}
      >
        {buttonText}
      </button>
      <ArrowCircleRightIcon className="h-4 w-4 transition ease-in-out group-hover:text-gamboge" />
    </div>
  )
}
