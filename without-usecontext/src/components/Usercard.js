import React from 'react'
import Button from './Button'
import Userdetails from './Userdetails'

const Usercard = (props) => {
  return (
      <div>
          <Userdetails username={props.username} />
          <Button btncolor={props.btncolor} />
    </div>
  )
}

export default Usercard