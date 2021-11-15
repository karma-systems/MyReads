import React from "react";
import {Link} from 'react-router-dom';
import propTypes from 'prop-types'
import Book from "../components/Book"

const HomePage = (props)=>{
const {books, updateShelf} = props;
const shelves = [
  {shelfKey: 'currentlyReading',shelfTitle : 'Currently Reading'},
  {shelfKey: 'wantToRead',shelfTitle : 'Want To Read'},
  {shelfKey: 'read',shelfTitle : 'Read'},
  
];
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
        {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        {shelves.map((currentShelf) => {
          const shelfKey = currentShelf.shelfKey;
          const shelfTitle = currentShelf.shelfTitle;
          return(
          <div className="bookshelf" key = {shelfKey}>
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books
                        .filter(book=>book.shelf === shelfKey)
                        .map(book =>(
                            <li key={book.id}>
                            <Book
                                book = {book}
                                updateShelf = {updateShelf}
                                shelf = {shelfKey}
                            />
                            </li>
                        ))
                    }
                    </ol>
                </div>
            </div>
        )
        }
        )};
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div className="open-search">
            <Link to="/search">
             Add a book
            </Link>  
                     
            </div>
          </div>

    )
}
HomePage.propTypes = {
books: propTypes.array.isRequired,
updateShelf: propTypes.func.isRequired,
}

export default HomePage
