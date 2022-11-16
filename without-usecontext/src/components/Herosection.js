import React from 'react'
import Usercard from './Usercard'

const Herosection = (props) => {
  return (
      <div>
          <img src='https://picsum.photos/200/300' alt='image'/>
          {/* adding the usercard component here */}
          <Usercard username={ props.username } btncolor={props.btncolor} />
     </div>
  )
}

export default Herosection