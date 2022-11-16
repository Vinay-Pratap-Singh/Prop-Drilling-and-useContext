import React, { useContext } from 'react'
import Usercard from './Usercard'

const Herosection = () => {
  return (
      <div>
          <img src='https://picsum.photos/200/300' alt='image'/>
          {/* adding the usercard component here */}
          <Usercard />
     </div>
  )
}

export default Herosection