import React, { useState } from "react";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

const App = () => {
  const [name, setName] = useState("");
  const [color, setcolor] = useState("");


  const myname = (event) => {
    setName(event.target.value);
  }
  const mycolor = (event) => {
    setcolor(event.target.value);
  }

  return (
    <>
      <Navbar />

      <form>
        {/* input box to take the user name as input */}
        <input type={"text"} placeholder="Enter the user name" value={name} onChange={myname}></input>
        {/* input box to take the color name in text format */}
        <input type={"text"} placeholder="Enter a color name" value={color} onChange={mycolor}></input>
      </form>

      <Herosection username={name} btncolor={ color } />
    </>
  );
};

export default App;
