import React from 'react'

const Book = (props) =>{
  const {img, title, author} = props;
  // attribute, evenHandler
  //onClick, onMouseOver
  const clickHandler = () =>{
    alert('Hello World')
  }

  // const complexExample = (author) =>{
  //   console.log(author);
  // }
  return(
  <section className="book" onMouseOver={()=>{
    // console.log(title)
  }}>
    <img src={img} alt="" className="bookimg" />
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    {/* the javascript has to be an expression, not a statement */}
    <button type="button" onClick={clickHandler}>Button</button>
    {/* <button type="button" onClick={()=>complexExample(author)}>Author Name</button> */}
  </section>
  )
}

export default Book // only one deafult export per file 