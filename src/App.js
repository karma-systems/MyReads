import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import * as BooksAPI from './BooksAPI'
import { useState, useEffect } from 'react'
import './App.css'

const BooksApp = ()=>{
let [books, setBooks] = useState([]);

useEffect(()=>{
  BooksAPI.getAll().then((booksResult) => {
    setBooks(booksResult)
})});

 const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((booksResult) => {
       setBooks(booksResult);
       })
    });
 
   }
 return (
    
<div className="app">
    <Routes>
          <Route exact path = "/"  element = {
            <HomePage 
              books = {books}
              updateShelf = {updateShelf}
            />
            }/>
         <Route path="/search" exact element = {
          <SearchPage
           books={books}
            updateShelf={updateShelf}
          />
         }/>
      </Routes>
    </div>
  )
}
export default BooksApp
