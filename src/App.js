import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
       this.setState({ books: books });
       })
    });
 
   }
   componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }
  render() {
    console.log(this.state.books);
  return (
<div className="app">
    <Routes>
          <Route exact path = "/"  element = {
            <HomePage 
              books = {this.state.books}
              updateShelf = {this.updateShelf}
            />
            }/>
         <Route path="/search" exact element = {
          <SearchPage
           books={this.state.books}
            updateShelf={this.updateShelf}
          />
         }/>
      </Routes>
    </div>
  )
}
}
export default BooksApp
