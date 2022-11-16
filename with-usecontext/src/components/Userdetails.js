import React, { useContext, createContext} from 'react'
import { mycontext } from '../App'

const Userdetails = () => {
    const data = useContext(mycontext);
  return (
      <div>My name is: { data.name }</div>
  )
}

export default Userdetails