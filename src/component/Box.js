import React from 'react'
import { useSelector } from 'react-redux'
import OmgBox from './OmgBox'

const Box = () => {

    const count = useSelector(state=>state.count)

  return (
    <div>
      Box : {count}
      <OmgBox/>
    </div>
  )
}

export default Box
