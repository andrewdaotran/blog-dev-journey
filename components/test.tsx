import React, {FC, useState} from 'react'


interface Props {
  text: string
  i?: number
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}





const Temporary = ({handleChange}) => {
  const [test, setTest] = useState<string>('')
  return (
    <div>Temporary
      <input onChange={handleChange} />
    </div>
  )
}

export default Temporary