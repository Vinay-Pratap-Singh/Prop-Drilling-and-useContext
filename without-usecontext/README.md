# **Without useContext in React JS**

## **create react app**
Creating a simple react app and deleting all the unnecessary files.
```js
npx create-react-app without-use-context
```
## **creating the component folder**
Creating a components folder for having all the components there. For ex:-
1. Navbar.js
2. Herosection.js
3. Usercard.js
4. Userdetails.js
5. Buttons.js

## **creating the navbar**
```js
const Navbar = () => {
    return (<h1>I am the Navigation Menu</h1>);
}
```

## **Working on app.js**
Importing the navbar and creating a form with two input box, first one for user name and second for color name.
Using the onchange and state to store the name in name variable and color name in color variable.
```js
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
```
>Note: importing the herosection and sending our name and button background color as props in it.

## **Working on herosection.js**
herosection has a random image and calling the user card and passing the name and button background color as props.
```js
const Herosection = (props) => {
  return (
      <div>
          <img src='https://picsum.photos/200/300' alt='image'/>
          {/* adding the usercard component here */}
          <Usercard username={ props.username } btncolor={props.btncolor} />
     </div>
  )
}
```

## **Working on usercard.js**
inside the usercard importing the userdetails.js and button.js and passing name as props for userdetails.js and color as a props for button.js.
```js
const Usercard = (props) => {
  return (
      <div>
          <Userdetails username={props.username} />
          <Button btncolor={props.btncolor} />
    </div>
  )
}
```

## **Working on userdetails.js**
inside this we will use the name passed as props
```js
const Userdetails = (props) => {
  return (
      <div>My name is: { props.username }</div>
  )
}
```

## **Working on button.js**
inside this using color as the background color of the button
```js
const Button = (props) => {  
  return (
    <div style={{backgroundColor:props.btncolor}}>Button</div>
  )
}
```

---
# **With useContext in React JS**

## **Create react app**
creating the react app
```js
npx create-react-app context-api
```
>Delete the unnecessary files

## **Working in App.js**
>Copy everything from previous app.js and paste here.

>create context and export it on the top
```js
export const mycontext = createContext("red");
```

>We have to wrap all our code inside return with **mycontext.provider** with the desired **value** to which we want to pass.

>the final code will look like this
```js
import React, { createContext, useState } from "react";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
export const mycontext = createContext();

const App = () => {
  const [name, setName] = useState("");
  const [color, setcolor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };
  const mycolor = (event) => {
    setcolor(event.target.value);
  };

  // using the use context

  return (
    <mycontext.Provider value={{name, color}}>
      <>
        <Navbar />

        <form>
          {/* input box to take the user name as input */}
          <input
            type={"text"}
            placeholder="Enter the user name"
            value={name}
            onChange={myname}
          ></input>

          {/* input box to take the color name in text format */}
          <input
            type={"text"}
            placeholder="Enter a color name"
            value={color}
            onChange={mycolor}
          ></input>
        </form>

        <Herosection />
      </>
    </mycontext.Provider>
  );
};

export default App;
```

## **Working with navbar.js**
copy and paste the whole navbar from previous one

## **Working with the herosection.js**
simply copy and paste everything but will not pass any props here.
```js
const Herosection = () => {
  return (
      <div>
          <img src='https://picsum.photos/200/300' alt='image'/>
          {/* adding the usercard component here */}
          <Usercard />
     </div>
  )
}
```

## **Working with usercard.js**
copy and paste from the previous one and delete the props
```js
const Usercard = () => {
  return (
      <div>
          <Userdetails />
          <Button />
    </div>
  )
}
```

## **Working with userdetails.js**
copy and paste everything from the previous one and delete the props. Also import the mycontext from app
```js
import React, { useContext } from 'react'
import { mycontext } from '../App'

const Button = () => {  
    const data = useContext(mycontext);
  return (
    <div style={{backgroundColor: data.color}}>Button</div>
  )
}
```

## **Working with button.js**
copy and paste everything from the previous one and delete the props from them.
>Same as userdetails.js
```js
import React, { useContext } from 'react'
import { mycontext } from '../App'

const Button = () => {  
    const data = useContext(mycontext);
  return (
    <div style={{backgroundColor: data.color}}>Button</div>
  )
}
```