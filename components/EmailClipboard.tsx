import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopiedPopup from '../components/CopiedPopup'
import { MailIcon } from '@heroicons/react/solid'

interface Props {
  textColor: string
  justifyCenter?: boolean
  paddingBottom?: boolean
  bold?: boolean
  xAxisAlign: string
}

interface Clipboard {
  value: string
  copied: boolean
}

const EmailClipboard = ({
  textColor,
  justifyCenter,
  bold,
  paddingBottom,
  xAxisAlign,
}: Props) => {
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
    <div
      className={`${justifyCenter && `justify-center`} ${
        paddingBottom && `pb-14`
      } relative flex items-center space-x-2`}
    >
      <MailIcon className=" h-4  w-4 text-gamboge " />
      <CopyToClipboard text={clipboard.value} onCopy={onCopy}>
        <h3
          className={`text-${textColor} ${
            bold && `font-bold`
          } transition ease-in-out hover:cursor-pointer hover:text-gamboge`}
          onClick={clipboardCopiedMessage}
        >
          andrewdaotran@gmail.com
        </h3>
      </CopyToClipboard>
      {clipboard.copied ? <CopiedPopup xAxisAlign={xAxisAlign} /> : null}
    </div>
  )
}

export default EmailClipboard
