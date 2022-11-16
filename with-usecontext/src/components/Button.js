import React, { useContext } from 'react'
import { mycontext } from '../App'

const Button = () => {  
    const data = useContext(mycontext);
  return (
    <div style={{backgroundColor: data.color}}>Button</div>
  )
}

export default Button