interface Props {
  xAxisAlign: string
}

const CopiedPopup = ({ xAxisAlign }: Props) => {
  return (
    <p
      className={`absolute top-[-30px] right-[${xAxisAlign}%] rounded-md bg-gamboge px-2 py-1 text-white shadow-md`}
    >
      copied!
    </p>
  )
}

export default CopiedPopup
