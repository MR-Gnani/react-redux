import React from 'react'
import { useSelector } from 'react-redux'

const OmgBox = () => {
    const count = useSelector(state=>state.count)
  return (
    <div>
      OmgBox : {count}
    </div>
  )
}

export default OmgBox
