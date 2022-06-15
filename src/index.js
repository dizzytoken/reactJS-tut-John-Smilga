import React from "react"; //es6 modules --> piece of functionality into our code 
import ReactDom from "react-dom"; // contains the render method

function Greeting(){// captitalize the name --> react knows that this is a component
  return <h4>this is debj and this is first component</h4>
}


ReactDom.render(<Greeting/>, document.getElementById('root')) // looking for what we want to render and where

// we need to self close or two tags like <Greeting></Greeting>
