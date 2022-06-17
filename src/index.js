import React from "react";
import ReactDom from "react-dom";

//CSS

import './index.css'

//setup vars
import {books} from './books' // names need to match exactly // named export
import Book from "./Book"; // default exports , names can be anything 
function BookList(){
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book key={book.id} {...book}/>
      })}
    </section>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))

